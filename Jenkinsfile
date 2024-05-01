pipeline {
    agent any
   
    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
        CHROME_BIN = '/usr/bin/google-chrome' // Chemin vers l'exécutable Chrome
        DOCKER_HUB_REGISTRY = 'docker.io' // URL du registre Docker Hub
    }
   
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
       
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
       
        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }
       
        stage('Build Docker image') {
            steps {
                sh 'docker build -t project:latest -f Dockerfile .'
                // Taguer l'image Docker avec une version
                sh 'docker tag project:latest faika/project:latest'
            }
        }
       
        stage('Deploy Docker image') {
            steps {
                script {
                    // Pousse l'image Docker vers Docker Hub
                    withCredentials([string(credentialsId: 'token', variable: 'DOCKER_TOKEN')]) {
                        docker.withRegistry('https://index.docker.io/v1/', '12') {
                            // Pousse à la fois les images latest et taggées
                            docker.image('faika/project:latest').push('latest')
                        }
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
            // Ajoutez ici toutes les actions post-build en cas de succès
        }
       
        failure {
            echo 'Build failed!'
            // Ajoutez ici toutes les actions post-build en cas d'échec
        }
    }
}
