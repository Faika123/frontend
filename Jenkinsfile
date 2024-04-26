pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\Program Files\Docker\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:\Program Files\nodejs"
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
                    env.PATH = "${nodejs}/bin:${env.PATH}"
                }
            }
        }
        // stage('Build Angular Application') {
        //     steps {
        //       script {  
        //         bat 'npm install'  // Installez les dépendances du projet avec "bat"
        //         bat 'npm run build' // Construisez l'application Angular avec "bat"
        //     }
        // }}
        // stage('Publish Artifact') {
        //     steps {
        //       script{
        //         archiveArtifacts 'dist'  // Archivez les fichiers de l'application construite
        //     }}
        // }
//       stage('Publish Artifact') {
//     steps {
//         script {
//             archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
//         }
//     }
// }
//       stage('Build & rename Docker Image') {
//     steps {
//         script {
//             // Construisez l'image Docker
//             bat docker build -t "frontend:${BUILD_ID}" .
//             bat "docker tag frontend-Image:${BUILD_ID} faika/frontend:${BUILD_ID} "
//         }
//     }
// }
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
            bat "docker run -d -p 8888:83 --name faika_${BUILD_ID} faika/frontend-image:${BUILD_ID}"
        }
    }
}




    }
}