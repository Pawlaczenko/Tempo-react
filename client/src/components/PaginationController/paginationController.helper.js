export const countPages = (noOfItems) => {
    const ITEMS_PER_PAGE = 9;
    return Math.ceil(noOfItems / ITEMS_PER_PAGE);
}

export const getBoundaries = (currentPage,pages) => {
    let max = (pages < 5) ? pages : 5;
    let left = Math.max(currentPage - 2, 1);
    let right = Math.min(currentPage + 2, pages);
    if(right - left < max-1){
      left = Math.max(1,left-(max - 1 - (right - left)));
      right = Math.min(pages,right+(max - 1 - (right - left)));
    }

    return [left,right];
}