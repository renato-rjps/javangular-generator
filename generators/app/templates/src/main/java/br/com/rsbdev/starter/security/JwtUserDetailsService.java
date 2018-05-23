package <%=packageName%>.security;

import static java.lang.String.format;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import <%=packageName%>.model.User;
import <%=packageName%>.repository.UserRepository;
import <%=packageName%>.security.exception.UserNotFoundException;


/**
 * User details service implementation @see {@link UserDetailsService}. Required
 * by Spring Security for custom implementations.
 * 
 * @author Renato
 *
 */
@Service
public class JwtUserDetailsService implements UserDetailsService {

	private static final String USER_NOT_FOUND_MESSAGE_TEMPLATE = "User '%s' not found";

	private final Logger LOGGER = LoggerFactory.getLogger(JwtUserDetailsService.class);

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		LOGGER.debug("Retriving user from database");

		Optional<User> user = userRepository.findByEmail(username);

		if (user.isPresent()) {
			return user.get();
		}

		throw new UserNotFoundException(format(USER_NOT_FOUND_MESSAGE_TEMPLATE, username));
	}

}
