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
                    bat "docker build -t application1:latest ."
                    bat "docker tag application1:latest faika/application1:latest"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Exécuter le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 8337:80 --name application1_container_latest faika/application1:latest"
                }
            }
        
        }

        stage('Publish Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        bat 'docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%'
                        bat 'docker tag faika/application1:latest faika/application1:%BUILD_ID%'
                        bat 'docker push faika/application1:%BUILD_ID%'
                        bat 'docker push faika/application1:latest'
                    }
                }
            }
        }
        stage('kubernetes Deployment') {
            steps {
                script {
                   bat 'kubectl apply -f frontend-deployment.yaml'
                   bat 'kubectl apply -f frontend-service.yaml' 
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
