const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    let empty=[],status="[ ]";
    for(let i of all){
      if(i.dueDate===yesterday){
          if(i.completed===true){
              status="[x]"
          }
          empty.push(`${status} ${i.title} ${i.dueDate}`)
          status="[ ]"
      }
    }
    return empty
  }

  const dueToday = () => {
      let empty=[],status="[ ]";
      for(let i of all){
        if(i.dueDate===today){
            if(i.completed===true){
                status="[x]"
            }
            empty.push(`${status} ${i.title}`)
            status="[ ]"
        }
      }
      return empty
  }

  const dueLater = () => {
      let empty=[],status="[ ]";
      for(let i of all){
        if(i.dueDate===tomorrow){
            if(i.completed===true){
                status="[x]"
            }
            empty.push(`${status} ${i.title} ${i.dueDate}`)
            status="[ ]"
        }
      }
      return empty
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater };
};

module.exports = todoList;
