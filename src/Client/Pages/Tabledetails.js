import React, { useEffect, useState } from 'react';
import tablecss from '../Styles/Tabledetails.module.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Tabledetails = ({data,delete:handleDeleteUser,update:handleupdateuser}) => {
    const usert=data;
    // console.log(props);
    return (
        <div className={tablecss.outertab}>
            <div></div>
            <div className={tablecss.innertable}>
                <table>
                    <thead>
                        <tr>
                            <td>UserName</td>
                            <td>UserName Status</td>
                            <td>UserName Role</td>
                            <td>User Details Update</td>
                            <td>User Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {usert && usert.length > 0 ? (
                            usert.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>
                                        <select value={user.status} name='status'>
                                            <option value='active'>Active</option>
                                            <option value='inactive'>InActive</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select value={user.Role} name='role'>
                                            <option value='user'>User</option>
                                            <option value='admin'>Admin</option>
                                        </select>
                                    </td>
                                    <td><input type="button" value='Update' onClick={()=>handleupdateuser(user)} /></td>
                                    <td><input type="button" value='Delete' 
                                     onClick={()=>handleDeleteUser(user)}
                                      /></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" style={{textAlign:"center"}}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tabledetails;
