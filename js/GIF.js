class GIF {

   constructor(

      id = String,
      user = String,
      title = String,
      preview_url = String,
      gif_url = String,
      statusFavorite = Boolean,
   
   ) {
      this.id = id;
      this.user = user;
      this.title = title;
      this.preview_url = preview_url;
      this.gif_url = gif_url;
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

   changeStatusFavorite() {
      this.statusFavorite = !this.statusFavorite;
   }


}