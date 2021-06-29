let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];
       let carritoController = {
         checkout: function (req,res){
             res.render("items", {items:productos});
         }
     }