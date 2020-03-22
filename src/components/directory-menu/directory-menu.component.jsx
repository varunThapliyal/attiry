import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectoryItems} from '../../Redux/directory/directory-menu.selector';




const Directory =({sections})=>(

<div className='directory-menu'>

{
    sections.map(({title,id,imageUrl,size})=>(
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
    ))
}
</div> 


)


  const mapStateToProps=createStructuredSelector({

       sections:selectDirectoryItems

  })
export default connect(mapStateToProps)(Directory);




