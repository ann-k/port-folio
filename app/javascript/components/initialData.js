let projectsArray = JSON.parse(document.getElementById('tabsListArea').dataset.props)

let projectsWithStringIds = projectsArray.map((item, i) => {
  i++
  item.id = String(i)
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

export default initialData
