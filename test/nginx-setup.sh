cp -rf /home/Johandi/jamiusnapitupulu/portfolio/test/build/* /var/www/jamiusnapitupulu/html
nginx -t
service nginx restart
echo "nginx restarted"