import Notes from './Notes'
import NewNote from './NewNote'
import Edit from './Edit'

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

const NoteNavStack = createStackNavigator({
  Notes: {
    screen: Notes
  },
  Edit: {
    screen: Edit
  }
})

const BottomTab = createBottomTabNavigator({
  NavStack: {
    screen: NoteNavStack
  },
  NewNote: {
    screen: NewNote
  }
})

export default Routes = createAppContainer(BottomTab)
