

const BaseGenerator = require('../generator-base');
const constants = require('../generator-constants');

const SERVER_MAIN_SRC_DIR = constants.SERVER_MAIN_SRC_DIR;
const SERVER_MAIN_RES_DIR = constants.SERVER_MAIN_RES_DIR;
const SERVER_TEST_SRC_DIR = constants.SERVER_TEST_SRC_DIR;

module.exports = class extends BaseGenerator {
    prompting() {
        this.printRSBLogo();

        const prompts = [
            {
                type: 'input',
                name: 'projectName',
                message: 'Qual o nome do projeto?',
                default: 'rsbdev'
            },
            {
                type: 'input',
                name: 'packageName',
                message: 'Qual o nome do pacote?',
                default: 'br.com.rsbdev'
            },
            {
                type: 'input',
                name: 'projectDescription',
                message: 'Qual a descrição do projeto?',
                default: 'RSBdev start project'
            }
        ];

        return this.prompt(prompts).then((props) => {
            this.props = props;
        });
    }

    writing() {
    // Cria cópia de objeto com as opções escolhidas
        const options = {
            packageName: this.props.packageName,
            projectName: this.props.projectName,
            projectDescription: this.props.projectDescription,
            mainClassName: this.getMainClassName(this.props.projectName)
        };
        const packagePath = this.props.packageName.replace(/\./g, '/');

        // Copia arquivos do maven
        this.copy('backend_root/**/*', `${this.props.projectName}/backend`);
        this.copy('backend_root/.mvn/**', `${this.props.projectName}/backend/.mvn/`);
        this.copy('backend_root/.*', `${this.props.projectName}/backend`);

        // Copia arquivos do frontend
        this.copy('frontend/**/*', `${this.props.projectName}/frontend`);
        this.copy('frontend/**/.*', `${this.props.projectName}/frontend`);

        // Copia README
        this.copy('README.md', `${this.props.projectName}/README.md`);

        // Copia e substitui valores no pom
        this.fs.copyTpl(
            this.templatePath('_pom.xml'),
            this.destinationPath(`${this.props.projectName}/backend/pom.xml`),
            options
        );

        // Copia e substitui valores nas classes java
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/StarterApplication.java`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/${options.mainClassName}.java`),
            options
        );

        // Config
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/config/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/config/`),
            options
        );

        // Controller
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/controller/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/controller/`),
            options
        );

        // Exception
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/exception/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/exception/`),
            options
        );

        // Model
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/model/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/model/`),
            options
        );

        // Repository
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/repository/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/repository/`),
            options
        );

        // Security
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/security/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/security/`),
            options
        );

        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/security/exception/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/security/exception/`),
            options
        );

        // Service
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/service/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/service/`),
            options
        );

        // Util
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_SRC_DIR}/br/com/rsbdev/starter/util/**`),
            this.destinationPath(`${this.props.projectName}/backend/src/main/java/${packagePath}/util/`),
            options
        );

        // Resorces
        this.fs.copyTpl(
            this.templatePath(`${SERVER_MAIN_RES_DIR}/**/*`),
            this.destinationPath(`${this.props.projectName}/backend/${SERVER_MAIN_RES_DIR}/`),
            options
        );

        // Tests
        this.fs.copyTpl(
            this.templatePath(`${SERVER_TEST_SRC_DIR}/br/com/rsbdev/starter/StarterApplicationTests.java`),
            this.destinationPath(`${this.props.projectName}/backend/${SERVER_TEST_SRC_DIR}/${packagePath}/${options.mainClassName}Tests.java`),
            options
        );

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('/rsbdev/frontend/package.json'));
    }

    install() {
        /*
    // Installetion
    this.installDependencies({
      bower: false,
      npm: true
    }).then(() => console.log('Everything is ready!')); */
    }
};
