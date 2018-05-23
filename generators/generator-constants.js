const JAVA_VERSION = '1.8';
const NODE_VERSION = '8.11.1';
const YARN_VERSION = '1.6.0';
const NPM_VERSION = '5.8.0';

const MAIN_DIR = 'src/main/';
const TEST_DIR = 'src/test/';

const constants = {
    MAIN_DIR,
    TEST_DIR,
    SERVER_MAIN_SRC_DIR: `${MAIN_DIR}java/`,
    SERVER_MAIN_RES_DIR: `${MAIN_DIR}resources/`,
    SERVER_TEST_SRC_DIR: `${TEST_DIR}java/`,
    SERVER_TEST_RES_DIR: `${TEST_DIR}resources/`,
    JAVA_VERSION,
    NODE_VERSION,
    YARN_VERSION,
    NPM_VERSION,
};

module.exports = constants;
