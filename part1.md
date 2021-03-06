# 1.01
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main) 
$ k3d cluster create -a 2
INFO[0000] Prep: Network
INFO[0000] Created network 'k3d-k3s-default'
INFO[0000] Created image volume k3d-k3s-default-images  
INFO[0000] Starting new tools node...
INFO[0001] Creating node 'k3d-k3s-default-server-0'     
INFO[0002] Pulling image 'ghcr.io/k3d-io/k3d-tools:5.4.1' 
INFO[0005] Pulling image 'docker.io/rancher/k3s:v1.22.7-k3s1' 
INFO[0012] Starting Node 'k3d-k3s-default-tools'        
INFO[0028] Creating node 'k3d-k3s-default-agent-0'      
INFO[0029] Creating node 'k3d-k3s-default-agent-1'      
INFO[0030] Creating LoadBalancer 'k3d-k3s-default-serverlb' 
INFO[0033] Pulling image 'ghcr.io/k3d-io/k3d-proxy:5.4.1' 
INFO[0046] Using the k3d-tools node to gather environment information 
INFO[0048] Starting new tools node...
INFO[0049] Starting Node 'k3d-k3s-default-tools'        
INFO[0051] Starting cluster 'k3s-default'
INFO[0051] Starting servers...
INFO[0051] Starting Node 'k3d-k3s-default-server-0'     
INFO[0058] Starting agents...
INFO[0058] Starting Node 'k3d-k3s-default-agent-1'      
INFO[0058] Starting Node 'k3d-k3s-default-agent-0'      
INFO[0069] Starting helpers...
INFO[0069] Starting Node 'k3d-k3s-default-serverlb'     
INFO[0077] Injecting records for hostAliases (incl. host.k3d.internal) and for 5 network members into CoreDNS configmap... 
INFO[0079] Cluster 'k3s-default' created successfully!  
INFO[0079] You can now use it like this:
kubectl cluster-info
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl create deployment log-output --image=samvancart/log-output:1.01
deployment.apps/log-output created
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get deployments
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
log-output   0/1     1            0           50s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
log-output-75f68ddfb7-ftxwc   1/1     Running   0          74s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl logs -f log-output-75f68ddfb7-ftxwc

> log-output@1.0.0 start
> node index.js

2022-06-01T13:10:26.790Z: se3iwwd7zjs
2022-06-01T13:10:31.801Z: se3iwwd7zjs
2022-06-01T13:10:36.802Z: se3iwwd7zjs
2022-06-01T13:10:41.808Z: se3iwwd7zjs
2022-06-01T13:10:46.814Z: se3iwwd7zjs
```

# 1.02 (Project v0.1)

```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl create deployment project --image=samvancart/project:0.1
deployment.apps/project created
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get deployments
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
log-output   1/1     1            1           34m
project      1/1     1            1           5m36s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
log-output-75f68ddfb7-ftxwc   1/1     Running   0          34m
project-d7889bdf7-7q4gt       1/1     Running   0          5m46s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl logs -f project-d7889bdf7-7q4gt

> project@1.0.0 start
> node server/index.js

Server started in port 3000
```

# 1.03

```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl delete deployment log-output
deployment.apps "log-output" deleted
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl apply -f log-output/manifests/deployment.yaml 
deployment.apps/log-output created
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get deployments
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
project      1/1     1            1           18h
log-output   1/1     1            1           4s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get pods
NAME                          READY   STATUS    RESTARTS      AGE
project-d7889bdf7-7q4gt       1/1     Running   1 (28m ago)   18h
log-output-75f68ddfb7-4r9sm   1/1     Running   0             12s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl logs -f log-output-75f68ddfb7-4r9sm

> log-output@1.0.0 start
> node index.js

2022-06-02T08:36:44.879Z: mqybbv4uqvp
2022-06-02T08:36:49.886Z: mqybbv4uqvp
2022-06-02T08:36:54.892Z: mqybbv4uqvp
```
# 1.04 (Project v0.2)

```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl apply -f project/manifests/deployment.yaml
Warning: resource deployments/project is missing the kubectl.kubernetes.io/last-applied-configuration annotation which is required by kubectl apply. kubectl apply should only be used on resources created declaratively by either kubectl create --save-config or kubectl apply. The missing annotation will be patched automatically.
deployment.apps/project configured
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get deployments
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
log-output   1/1     1            1           24h
project      1/1     1            1           43h
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get pods
NAME                          READY   STATUS    RESTARTS      AGE
log-output-6fcc4c6857-8p99b   1/1     Running   1 (23m ago)   24h
project-84b6cf9bfb-zjxpx      1/1     Running   0             25s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl logs -f project-84b6cf9bfb-zjxpx

> project@1.0.0 start
> node server/index.js

Server started in port 3000
```
# 1.05 (Project v0.3)

```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get pods
NAME                          READY   STATUS    RESTARTS        AGE
log-output-6fcc4c6857-8p99b   1/1     Running   1 (4h56m ago)   28h
project-5fd5c55c5-rpgqw       1/1     Running   0               9m15s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl port-forward project-5fd5c55c5-rpgqw 3000:3000
Forwarding from 127.0.0.1:3000 -> 3000
Forwarding from [::1]:3000 -> 3000
Handling connection for 3000
```
```sh
Sam@Sam-PC2 MINGW64 ~
$ curl http://localhost:3000
Hello from server!
```
# 1.06 (Project v0.4)

```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
INFO[0000] portmapping '8081:80' targets the loadbalancer: defaulting to [servers:*:proxy agents:*:proxy] 
INFO[0000] Prep: Network
INFO[0000] Created network 'k3d-k3s-default'
INFO[0000] Created image volume k3d-k3s-default-images  
INFO[0000] Starting new tools node...
INFO[0001] Creating node 'k3d-k3s-default-server-0'     
INFO[0001] Starting Node 'k3d-k3s-default-tools'        
INFO[0003] Creating node 'k3d-k3s-default-agent-0'      
INFO[0005] Creating node 'k3d-k3s-default-agent-1'      
INFO[0006] Creating LoadBalancer 'k3d-k3s-default-serverlb' 
INFO[0007] Using the k3d-tools node to gather environment information 
INFO[0009] Starting new tools node...
INFO[0010] Starting Node 'k3d-k3s-default-tools'        
INFO[0012] Starting cluster 'k3s-default'
INFO[0012] Starting servers...
INFO[0012] Starting Node 'k3d-k3s-default-server-0'     
INFO[0019] Starting agents...
INFO[0019] Starting Node 'k3d-k3s-default-agent-1'      
INFO[0020] Starting Node 'k3d-k3s-default-agent-0'      
INFO[0030] Starting helpers...
INFO[0030] Starting Node 'k3d-k3s-default-serverlb'     
INFO[0038] Injecting records for hostAliases (incl. host.k3d.internal) and for 5 network members into CoreDNS configmap... 
INFO[0040] Cluster 'k3s-default' created successfully!  
INFO[0040] You can now use it like this:
kubectl cluster-info
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl apply -f project/manifests/deployment.yaml
deployment.apps/project created
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get deployments
NAME      READY   UP-TO-DATE   AVAILABLE   AGE
project   1/1     1            1           12m
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl get pods
NAME                       READY   STATUS    RESTARTS   AGE
project-5fccfff8c4-lcqdc   1/1     Running   0          2m28s
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ kubectl apply -f project/manifests/service.yaml
service/project created
```
```sh
Sam@Sam-PC2 MINGW64 ~/Documents/YO/kubernetes (main)
$ curl http://localhost:8082
Hello from server!
```
