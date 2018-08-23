import React from 'react'
import ClassDropdown from 'components/class/Dropdown'
import RecomposeDropdown from 'components/recompose/Dropdown'
import RecompactDropdown from 'components/recompact/Dropdown'
import ProppyDropdown from 'components/proppy/Dropdown'
import RenderpropsDropdown from 'components/renderprops/Dropdown'
import AdoptDropdown from 'components/adopt/Dropdown'
import data from 'data'
import {
  compose,
  withStateHandlers,
} from 'recompose'

const Dropdowns = ({
  focusIndex,
  increaseFocusIndex,
  setFocusIndex,
}) => (
  <React.Fragment>
    <button onClick={increaseFocusIndex} />
    <ClassDropdown data={data} autoFocus={focusIndex === 0} />
    <RecomposeDropdown data={data} autoFocus={focusIndex === 1} />
    <RecompactDropdown data={data} autoFocus={focusIndex === 2} />
    <ProppyDropdown data={data} autoFocus={focusIndex === 3} />
    <RenderpropsDropdown data={data} autoFocus={focusIndex === 4} />
    <AdoptDropdown data={data} autoFocus={focusIndex === 5} />
  </React.Fragment>
)

export const enhance = compose(
  withStateHandlers(
    ({ initialFocusIndex = 0 }) => ({ focusIndex: initialFocusIndex }),
    {
      increaseFocusIndex: ({ focusIndex }) => () => ({
        focusIndex: (focusIndex + 1) % 6,
      }),
      setFocusIndex: () => (focusIndex) => ({
        focusIndex,
      })
    }
  ),
)

export default enhance(Dropdowns)
