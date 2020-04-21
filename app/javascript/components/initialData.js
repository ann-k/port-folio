let projectsArray = JSON.parse(document.getElementById('tabsListArea').dataset.props)

let projectsWithStringIds = projectsArray.map((item, i) => {
  i++
  item.id = 'project-' + i
  return item
})

let stringIds = projectsWithStringIds.map(item => item.id)

const initialData = {
  projects: projectsWithStringIds,
  tabList: {
    id: 'Проекты',
    projectIds: stringIds
  },
  tabListOrder: ['tablist-1']
  // delete tabLists and use projectsOrder instead
  // projectsOrder: ['project-1', 'project-2', 'project-3']
}

console.log(initialData.tabList.projectIds);

export default initialData
