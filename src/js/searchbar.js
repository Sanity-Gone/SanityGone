import autoComplete from '@tarekraafat/autocomplete.js/dist/js/autoComplete';
import file_index from '../build/file_index.json';
import formatter from './utils/formatter'
import readable_professions from '../config/readable_professions';

new autoComplete({
    data: {
      src: file_index,
      key: ['searchable_name'],
      cache: true
    },
    placeHolder: "Search", 
    selector: "#searchbar",
    searchEngine: "strict",
    resultsList: {
        render: true,
        container: source => {
        },
        destination: document.querySelector("#searchbar_results"),
        position: "beforeend",
        element: "ul"
    },
    query: {
          manipulate: (query) => {
              return formatter.slugifyStrict(query);
          }
    },
    maxResults: 5,
    highlight: true, 
    resultItem: {
        content: (data, source) => {
            source.innerHTML = `<a href="${data.value.url}"><img src="/images/char_avatar/${data.value.key}.png"/><div><span class="name">${data.value.name}</span><span class="profession">${readable_professions[data.value.profession]}</span></div></a>`;
        },
        element: "li"
    },
    noResults: () => { 
        document.querySelector("#autoComplete_list").innerHTML = `<li><div class="no_results"> No Results </div></li>`;
    },
});