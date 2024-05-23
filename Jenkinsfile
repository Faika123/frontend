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

        stage('Build & rename Docker Image') {
            steps {
                script {
                    // Construire l'image Docker
                    bat "docker build -t frontend:latest ."
                    bat "docker tag frontend:latest faika/frontend:latest"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Exécuter le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 8333:80 --name frontend_container_latest faika/frontend:latest"
                }
            }
        
        }
        

  stage('SonarQube Analysis') {
    def scannerHome = tool 'SCANNER';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }

         /* stage('Deploy Docker image') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                     docker.withRegistry('https://index.docker.io/v2/', '10') {
                        // Push both the latest and tagged images
                        docker.image('faika/frontend:latest').push()
                    }
                }
            }
        }*/
    }

}