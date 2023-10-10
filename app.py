from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/products')
def products():
   return render_template('products.html')

@app.route('/product-1-details')
def product_1_details():
   return render_template('product-1-details.html')

@app.route('/account')
def account():
   return render_template('account.html')

@app.route('/cart')
def cart():
   return render_template('cart.html')

@app.route('/account-test')
def account_test():
   return render_template('account-test.html')

if __name__ == '__main__':
   app.run(debug = False,host='0.0.0.0')
