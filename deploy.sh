echo "➡️ Atualizando projeto"
git pull origin main

echo "📂 Copiando projeto"
cp -r ./ ../public/

echo "✅ Projeto atualizado e pronto para acessar via NGINX"