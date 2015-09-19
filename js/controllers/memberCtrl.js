function HomeCtrl(projectService) {

	this.projectService = projectService;
	this.projects = this.projectService.getProjects();	
	
}


angular.module('kush').controller('homeCtrl', HomeCtrl);