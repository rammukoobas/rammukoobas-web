import React from 'react'

import nimekiri from './members-list.json'

import './Members.scss'

function Members() {

	function renderMembers() {
		return nimekiri.members.map((member, i) =>
			<tr key={i}>
				<td className='nimi'><h3>{member.nimi}</h3></td>
				<td><h3>{member.status}</h3></td>
				<td><h3>{member.instagram}</h3></td>
			</tr>
		)
	}

	return (
		<section className='members'>
			<div className='konteiner'>
				<h2>LIIKMETE NIMEKIRI:</h2>
				<table>
					<tbody>
						{renderMembers()}
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default Members