import $ from "jquery";

export const fetchItems = (success) => {
  $.ajax({
    method: "GET",
    url: "https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js",
    success,
    error: () => alert("error")
  });
};

// all backend ajax calls to rails API would be in a util
