let statusFilters = document.querySelectorAll("input[name=status]");

for (let statusFilter of statusFilters) {
  statusFilter.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
}
