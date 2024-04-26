pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:/Program Files/Docker/cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:/Program Files/nodejs"
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }
        stage('Install Node.js and npm') {
            steps {
                script {
                    def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${NODEJS_PATH}/bin:${env.PATH}"
                }
            }
        }
        stage('Build & rename Docker Image') {
            steps {
                script {
                    // Construisez l'image Docker
                    bat "docker build -t frontend:${BUILD_ID} faika"
                    bat "docker tag frontend:${BUILD_ID} faika/frontend:${BUILD_ID}"
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Exécutez le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 8888:83 --name faika_${BUILD_ID} faika/frontend:${BUILD_ID}"
                }
            }
        }
    }
}
