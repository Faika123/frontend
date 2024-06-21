pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        NODEJS_PATH = "C:\\Program Files\\nodejs"
    }
    stages {
        stage('Install Node.js and npm') {
            steps {
                script {
                    def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejs}/bin:${env.PATH}"
                }
            }
        }

        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build & Rename Docker Image') {
            steps {
                script {
                    bat "docker build -t applications1:latest ."
                    bat "docker tag applications1:latest faika/applications1:latest"
                }
            }
        }


        stage('Publish Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        bat 'docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%'
                        bat 'docker tag faika/applications1:latest faika/applications1:%BUILD_ID%'
                        bat 'docker push faika/applications1:%BUILD_ID%'
                        bat 'docker push faika/applications1:latest'
                    }
                }
            }
        }

    }
    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
