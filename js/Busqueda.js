class Busqueda {

   constructor(
   ) {
      //API key's para realizar peticiones a la API
      this.apiKey = 'trify0tI94PynofAobCVFUjWCBY5bn6E',
         //Search endpoint
         this.url_search = 'api.giphy.com/v1/gifs/search',
         //Trending endpoint
         this.url_trending = 'api.giphy.com/v1/gifs/trending',
         //Upload endpoint
         this.url_upload = 'upload.giphy.com/v1/gifs',
         //Search suggestions
         this.url_related = 'api.giphy.com/v1/gifs/search/tags',
         //Trending Terms
         this.url_trending_terms = 'api.giphy.com/v1/trending/searches',
         //Search GIF url based on GIF id
         this.url_based_id = 'api.giphy.com/v1/gifs'
         //endpoint para subir los GIFS Creados
         this.url_upload = 'upload.giphy.com/v1/gifs';
      //Offset para el boton ver más
      this.offset = 0;

   }

   get getApiKey() { return this.apiKey}
   
   
   //Obtiene los resultados a partir de un término de busqueda
   async wordSearch(search, offset = 0, cantidadGIFS = 12) {

      //Se realiza la petición a la API /search
      try {
         const resultados = await fetch(
            'https://' + this.url_search +
            '?q=' + search +
            '&api_key=' + this.apiKey +
            '&limit=' + cantidadGIFS +
            '&offset=' + offset);

         const arrayBusqueda = await resultados.json();

         this.offset += cantidadGIFS;

         return arrayBusqueda;

      } catch (error) {
         console.log(error)
      }
   }

   //Obtiene los GIFS que están en trending
   async trendingGifs() {

      try {
         const resultadosTrending = await fetch(
            'https://' + this.url_trending +
            '?&api_key=' + this.apiKey +
            '&limit=' + '10');

         const arrayTrending = await resultadosTrending.json();

         return arrayTrending;

      } catch (error) {
         console.log(error)
      }
   }

   //Obtiene los trending terms
   async trendingTerms() {

      try {
         let trendingRespuesta = await fetch(
            'https://' + this.url_trending_terms +
            '?&api_key=' + this.apiKey);

         let arrayTrendingTerms = await trendingRespuesta.json();

         return arrayTrendingTerms;

      } catch (error) {
         console.log(error)
      }

   }

   //Obtiene los terminos sugeridos mientras se escribe
   async wordSuggestion(word) {

      try {
         const sugerenciasRespuesta = await fetch(
            'https://' + this.url_related +
            '?q=' + word +
            '&api_key=' + this.apiKey +
            '&limit=4')
         const arraySugerencias = await sugerenciasRespuesta.json();

         return arraySugerencias;


      } catch (error) {
         console.log(error);
      }


   }

   async downloadGIF(id) {
      let data = await fetch(`https://media2.giphy.com/media/${id}/giphy.gif?${this.apiKey}&rid=giphy.gif`);

      return data;
   }

   async uploadGIF(form){

      let request = await fetch(`https://${this.url_upload}?api_key=${this.apiKey}`,
      {
         method: 'POST',
         body: form
      });
      let response = await request.json();
      return response;
   }

   async gifsInfoById(ids){
      let request = await fetch(`https://${this.url_based_id}?api_key=${this.apiKey}&ids=${ids}`);
      let response = await request.json();

      return response;
   }
}
