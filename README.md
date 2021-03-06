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
### ローカルでテストする
```bash
cd hello_world
npm install
npm test
sam local generate-event api > event_file.json
cd ..
sam local invoke HelloWorldFunction --event hello_world/event_file.json
sam local start-api --host 0.0.0.0
```
[http://192.168.33.10:3000/hello](http://192.168.33.10:3000/hello)に接続して確認する

### ドキュメント環境セットアップ
```bash
cd /vagrant
sudo amazon-linux-extras install ruby2.4
gem install bundler
bundle init
```
Gemfileに以下の内容を追加してパッケージのセットアップを行う
```bash
cat <<EOF >> Gemfile
# documents
group :doc do
  gem 'asciidoctor'
  gem 'asciidoctor-diagram'
  gem 'yard'
end
EOF
bundle install --path vendor/bundle
```
ドキュメントサーバーの起動
```bash
 ./docs/server.sh 
```
[http://192.168.33.10:8000](http://192.168.33.10:8000)に接続して確認する

## 配置
### AWS認証設定
```bash
cd /vagrant/sam-app
cat <<EOF > .env
#!/usr/bin/env bash
export AWS_ACCESS_KEY_ID=xxxxxxxxxxxx
export AWS_SECRET_ACCESS_KEY=xxxxxxxxxx
export AWS_DEFAULT_REGION=us-east-1
EOF
```
アクセスキーを設定したら以下の操作をする
```bash
source .env
aws ec2 describe-regions
```
### デプロイ
デプロイ用のS3バケットを用意する
```bash
aws s3 mb s3://nodejs-handson
```
デプロイを実行する
````bash
cd /vagrant/sam-app
sam validate
sam package --template-file template.yaml --s3-bucket nodejs-handson --output-template-file packaged.yaml
sam deploy --template-file packaged.yaml --stack-name nodejs-handson --capabilities CAPABILITY_IAM
````
デプロイが成功したら動作を確認する
```bash
aws cloudformation describe-stacks --stack-name nodejs-handson --query 'Stacks[].Outputs[1]'
```

## 運用
### スタックの削除
```bash
aws cloudformation delete-stack --stack-name nodejs-handson
```
### S３バケットの削除
```bash
aws s3 rb s3://nodejs-handson --force
```
### git-secretsの設定
インストール
```bash
cd /home/vagrant
git clone https://github.com/awslabs/git-secrets.git
cd git-secrets/
make install
```
既存プロジェクトにフックを設定
```bash
cd /vagrant
git secrets --install
```
拒否条件を設定
```bash
git secrets --register-aws --global
```
レポジトリをスキャンする
```bash
cd /vagrant
git secrets --scan -r 
```
許可ルールを追加する
```bash
git config --add secrets.allowed sam-app/hello_world/event_file.json
```

## 開発
### eslintのセットアップ
```bash
cd /vagrant
npm install eslint --save-dev
```
### eslint-config-airbnbのセットアップ
```bash
cd /vagrant/sam-app/hello_world/
npx install-peerdeps --dev eslint-config-airbnb
./node_modules/.bin/eslint --init
cat <<EOF > .eslintrc
{
  "extends": "airbnb",
  "plugins": [],
  "parserOptions": {},
  "env": {"mocha": true},
  "globals": {},
  "rules": {}
}
EOF
```
package.jsonにnpm-scriptを追加する
```json
"scripts": {
    "test": "mocha tests/unit/",
    "lint": "eslint ./"
  },
```
lintコマンドを実行する
```bash
npm run lint
```
### huskyのセットアップ
```bash
npm install husky@next --save-dev
```
package.jsonにnpm-scriptを追加する
```bash
"scripts": {
    "test": "mocha tests/unit/",
    "lint": "eslint ./",
    "pre-commit": "npm run lint",
    "pre-push": "npm test"
  },
```
コマンドを確認する
```bash
npm run pre-commit
npm run pre-push
```

### Istanbulのセットアップ
```bash
npm install --save-dev nyc
```
package.jsonにnpm-scriptを追加する
```json
"scripts": {
    "test": "mocha tests/unit/",
    "lint": "eslint ./",
    "coverage": "nyc --reporter=html --reporter=text mocha tests/unit/",
    "pre-commit": "npm run lint",
    "pre-push": "npm test"
  },
```

# 参照
+ [Amazon Linux2にDockerをインストールする](https://qiita.com/reoring/items/0d1f556064d363f0ccb8)
+ [Pythonのパッケージ管理システムpipのインストールと使い方](https://uxmilk.jp/12691)
+ [aws-sam-local 改め aws-sam-cli の新機能 sam init を試す](https://qiita.com/hayao_k/items/841026f9675d163b58d5)
+ [nvmを使ったNode.jsのインストール&バージョンアップ手順](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a)
+ [クラウド破産しないように git-secrets を使う](https://qiita.com/pottava/items/4c602c97aacf10c058f1) 
+ [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
+ [ESLint 最初の一歩](https://qiita.com/mysticatea/items/f523dab04a25f617c87d)
+ [husky](https://github.com/typicode/husky)
+ [istanbul](https://istanbul.js.org/)