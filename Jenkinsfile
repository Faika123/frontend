pipeline {
    agent any
    
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH};${PATH}"
        //DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:\\Program Files\\nodejs"
    }
    
    stages {
        stage('Install Node.js and npm') {
            steps {
                script {
                    def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejs}/bin;${env.PATH}"
                }
            }
        }

        stage('checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build & rename Docker Image') {
            steps {
                script {
                    // Construisez l'image Docker
                    bat "docker build -t project:latest"
                    bat "docker tag project:latest faika/project:latest"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Exécutez le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 8888:83 --name faika_project_latest faika/project:latest"
                }
            }
        }
    }
}
