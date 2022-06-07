docker build -t recognizer-frontend-test .
docker run --memory 8128m --memory-swap=8128m --memory-swappiness=0 --interactive --tty -d -p 3001:3000 recognizer-frontend-test 