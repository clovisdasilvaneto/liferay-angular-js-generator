const Generator = require('yeoman-generator');
const config = require('../../config/config');

module.exports = class extends Generator {
	constructor(args, opts) {
		// Calling the super constructor is important so our generator is correctly set up
		super(args, opts);
		
		this.properties = {};
	}
	
	get getPromptOptions(){
		return [{
			type    : 'input',
			name    : 'tomcatSRC',
			message : "Where's your tomcat path?",
			default : config.tomcatSRC
		}, {
			type    : 'input',
			name    : 'themeName',
			message : "What's your theme name?",
			default : config.themeName
		}, {
			type    : 'input',
			name    : 'themeId',
			message : "What's your theme id?",
			default : config.themeId
		}, {
			type    : 'input',
			name    : 'urlToProduction',
			message : "Enter the url to your production or development site",
			default : config.urlToProduction
		}, {
			type    : 'list',
			name    : 'baseTheme',
			message : "What kind of framework do you want?",
			choices : ["Angular Js"]
		}, {
			type    : 'input',
			name    : 'appName',
			message : "What's your app name?",
			default : config.appName,
		}]
	}
	
	prompting() {
		return this.prompt(this.getPromptOptions).then((answers) => {
			let liferayPath = answers.tomcatSRC.split('/');
			liferayPath[liferayPath.length-1] = 'deploy';
			
			this.properties.tomcatSRC = answers.tomcatSRC;
			this.properties.deployPath = liferayPath.join('/');
			this.properties.themeName = answers.themeName;
			this.properties.baseTheme = answers.baseTheme;
			this.properties.themeId = answers.themeId.replace(/ /g, "-");
			this.properties.urlToProduction = answers.urlToProduction;
			this.properties.appName = answers.appName;
		});
	}
	
	writing() {
		this._copyTemplates(config.files, this.properties);
	}
	
	end(){
		process.chdir(`${this.properties.themeId}/`);
		console.log('All most done, installing the dependencies...');
		this.npmInstall();
	}
	
	_copyTemplates(dataArray, properties){
		let themeId = this.properties.themeId;
		
		dataArray.forEach(data => {
			this.fs.copyTpl(
				this.templatePath(data),
				this.destinationPath(`${themeId}/${data}`),
				properties
			);
		});
	}
};