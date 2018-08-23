import React from 'react'
import ClassDropdown from 'components/class/Dropdown'
import RecomposeDropdown from 'components/recompose/Dropdown'
import RecompactDropdown from 'components/recompact/Dropdown'
import ProppyDropdown from 'components/proppy/Dropdown'
import RenderpropsDropdown from 'components/renderprops/Dropdown'
import AdoptDropdown from 'components/adopt/Dropdown'
import data from 'data'

const Dropdowns = () => (
  <React.Fragment>
    <ClassDropdown data={data} />
    <RecomposeDropdown data={data} />
    <RecompactDropdown data={data} />
    <ProppyDropdown data={data} />
    <RenderpropsDropdown data={data} />
    <AdoptDropdown data={data} />
  </React.Fragment>
)

export default Dropdowns
