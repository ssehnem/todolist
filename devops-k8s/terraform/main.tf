terraform {
  required_providers {
    kind = {
      source  = "justenwalker/kind"
      version = "0.17.0"
    }
  }

}

provider "kind" {}

resource "kind_cluster" "dev_cluster" {
  name           = "dev-cluster"

  config = <<EOF
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
  - role: worker
EOF
}


