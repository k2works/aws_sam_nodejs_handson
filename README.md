# Aws Sam Node.js Handson
AWS サーバーレスアプリケーションモデル (AWS SAM) ハンズオン(Node.js)

# 前提
  
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| node           |8.10.0    |             |
| npm            |5.6.0  |             |
| sam            |0.2.11  |             |
| docker         |17.06.2  |             |
| docker-compose |1.21.0  |             |
| vagrant        |2.0.3  |             |

# 構成
1. [構築](#構築 )
1. [配置](#配置 )
1. [運用](#運用 )
1. [開発](#開発 )

## 構築
### 開発用仮想マシンの起動・プロビジョニング
+ Dockerのインストール
+ docker-composeのインストール
+ pipのインストール

```bash
vagrant up
vagrant ssh
```
### 開発パッケージのインストール
+ aws-sam-cliのインストール
+ nvmのインストール
+ Node.jsのインストール

```bash
pip install --user aws-sam-cli
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.3/install.sh | bash
source ~/.bashrc 
nvm install v8.10
nvm alias default v8.10
```

### アプリケーションの作成
```bash
cd /vagrant
sam init --runtime nodejs
cd sam-app
```
## 配置
## 運用
## 開発

# 参照
+ [Amazon Linux2にDockerをインストールする](https://qiita.com/reoring/items/0d1f556064d363f0ccb8)
+ [Pythonのパッケージ管理システムpipのインストールと使い方](https://uxmilk.jp/12691)
+ [aws-sam-local 改め aws-sam-cli の新機能 sam init を試す](https://qiita.com/hayao_k/items/841026f9675d163b58d5)
+ [nvmを使ったNode.jsのインストール&バージョンアップ手順](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a) 