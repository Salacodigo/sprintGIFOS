class GIF {

   constructor(

      id = String,
      user = String,
      title = String,
      preview_url = String,
      gif_url = String,
      category = [], //search, trend, create
      statusFavorite = Boolean,
   
   ) {
      this.id = id;
      this.user = user;
      this.title = title;
      this.preview_url = preview_url;
      this.gif_url = gif_url;
      this.category = category;
      this.statusFavorite = statusFavorite;
   }

   // GETTERS
   get gifId() {
      return this.id;
   }

   get gifUser() {
      return this.user;
   }

   get gifTitle() {
      return this.title;
   }

   get gifPreviewURL() {
      return this.preview_url;
   }

   get gifLong_url() {
      return this.gif_url;
   }

   get gifCategory() {
      return this.category;
   }

   get status() {
      return this.statusFavorite;
   }


   // SETTERS
   set gifId(id) {
      this.id = id;
   }

   set gifUser(gifUser) {
      this.user = gifUser;
   }

   set gifTitle(giTtitle) {
      this.title = giTtitle;
   }

   set gifPreviewURL(gifPreviewURL) {
      this.preview_url = gifPreviewURL;
   }

   set gifLong_url(gifLong_url) {
      this.gif_url = gifLong_url;
   }

   addCategory(gifCategory) {
      this.category.push(gifCategory);
   }

   deleteCategory(gifCategory) {
      let nuevo = this.category.filter(cat => {
         return cat !== gifCategory;
      });

      this.category = nuevo;
   }

   changeStatusFavorite() {
      this.statusFavorite = !this.statusFavorite;
   }


   printGIFInfo() {
      let gif = {
         id: this.id,
         user: this.user,
         title: this.title,
         preview_url: this.preview_url,
         gif_url: this.gif_url,
         category: this.category,
         statusFavorite: this.statusFavorite
      }
      console.log(gif);
   }


}