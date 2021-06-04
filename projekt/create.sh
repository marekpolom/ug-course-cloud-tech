kubectl apply -f ./kubectl-development/development-namespace.yaml
sleep 2
kubectl apply -f ./kubectl-development/mongo-pv.yaml
sleep 2
kubectl apply -f ./kubectl-development/mongo-pvc.yaml
sleep 2
kubectl apply -f ./kubectl-development/backend-config-map.yaml
kubectl apply -f ./kubectl-development/frontend-config-map.yaml
sleep 2
kubectl apply -f ./kubectl-development/.

sleep 5

kubectl apply -f ./kubectl-production/production-namespace.yaml
sleep 2
kubectl apply -f ./kubectl-production/mongo-pv.yaml
sleep 2
kubectl apply -f ./kubectl-production/mongo-pvc.yaml
sleep 2
kubectl apply -f ./kubectl-production/backend-config-map.yaml
kubectl apply -f ./kubectl-production/frontend-config-map.yaml
sleep 2
kubectl apply -f ./kubectl-production/.