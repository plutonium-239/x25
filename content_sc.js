const parent = document.querySelector("#abs-outer > div.extra-services > div.full-text > ul");

const ar5iv_link = location.origin.replace('arxiv', 'ar5iv') + location.pathname;

var ar5iv_element = `
	<li>
    	<a href="${ar5iv_link}" id="custom_ar5iv_link" class="abs-button">ar5iv HTML</a>
	</li>`

parent.insertAdjacentHTML('beforeend', ar5iv_element);
console.log('x25 end');