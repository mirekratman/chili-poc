function loadChili() {
    const token = document.getElementById('token').value;
    const environmentBaseURL = document.getElementById('url').value;
    const projectID = document.getElementById('projectID').value;
    const projectName = 'test';
    const userInterfaceID = document.getElementById('interfaceID').value;
    const refreshTokenAction = () => Promise.resolve(token);

    window.StudioUI.studioUILoaderConfig({
    selector: 'studio-ui-container',
    projectId: projectID,
    graFxStudioEnvironmentApiBaseUrl: environmentBaseURL,
    authToken: token,
    refreshTokenAction: refreshTokenAction,
    projectName: projectName,
    userInterfaceID: userInterfaceID,
    });

}

