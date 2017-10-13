const themeName = "My Liferay Theme Sample";

module.exports = {
	tomcatSRC: "/Users/clovisneto/Liferay/liferay-dxp-digital-enterprise-7.0-sp4/tomcat-8.0.32",
	deployPath: "/Users/clovisneto/Liferay/liferay-dxp-digital-enterprise-7.0-sp4/deploy",
	urlToProduction: "http://localhost:8080",
	themeName: themeName,
	appName: "my-liferay-app",
	themeId: "my-liferay-theme-sample",
	files: [
		"src/css/_custom.scss",
		"src/js/app.js",
		"src/templates/portal_normal.ftl",
		"src/WEB-INF/liferay-look-and-feel.xml",
		"src/WEB-INF/liferay-plugin-package.properties",
		".gitignore",
		"gulpfile.js",
		"liferay-theme.json",
		"package.json"
	]
};