window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

searchFormBtn.addEventListener('click', () => {
    location.hash = `search=${searchFormInput.value}`;
});
trendingBtn.addEventListener('click', () => {
    location.hash = "trends";
});

arrowBtn.addEventListener('click', ()=> {
    if (document.domain != 'localhost'){
        location.hash = "#home"
    }else{
        history.back();
    }
  //  console.log(window.history.back().location)
  //  const [_, query] = location.hash.back.split('=');
  //  searchFormInput.value = `${query}`;
});
function navigator() {
    // console.log({ location });
    
    if (location.hash.startsWith('#trends')) {
        trendsPage()
    }else if (location.hash.startsWith('#search=')){
        searchPage()
    }else if (location.hash.startsWith('#movie=')){
        movieDetailPage()
    }else if (location.hash.startsWith('#category=')){
        categoriesPage()
    }else {
        homePage()
    }
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0 ;
}

function homePage(){
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')


    getTrendingMoviesPreview();
    getCategoriesMoviesPreview();
}
function categoriesPage(){
    // console.log('Categories!!')
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive')
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    
    const [_, categoryData] = location.hash.split('=') 
    const [categoryId, categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
}
function searchPage(){
    // console.log('Search!!')
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    
    // ["#search", "Robot"]
    const [_, query] = location.hash.split('=') 
    getMoviesBySearch(query)
}
function trendsPage(){
    // console.log('TRENDS!!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = "Tendencias";

    getTrendingMovies ();
}

function movieDetailPage(){
    // console.log('Movie!!')
    
    headerSection.classList.add('header-container--long');
    //  headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive')
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

        // ["#movie", "32564"]
    const [_, movieId] = location.hash.split('=') ;
    getMovieById(movieId);
}