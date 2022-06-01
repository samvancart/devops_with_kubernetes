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