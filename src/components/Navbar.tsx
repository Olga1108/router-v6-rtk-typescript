import React, {FC} from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const Navbar: FC = () => {
	let navigate = useNavigate();
	 
	const auth = true;
	return (
		<Layout.Header>
			<Row justify='end'>
				{auth
					?
					<>
						<div style={{color: 'white'}}>
							Name
						</div>
						<Menu theme='dark' mode='horizontal' selectable={false}>
							<Menu.Item 
								onClick={() => navigate('/login')} 
								key={1}>
								Logout
							</Menu.Item>
							<Menu.Item 
								onClick={() => navigate('/login')} 
								key={2}>
								Logout
							</Menu.Item>
						</Menu>
					</>
					:
					<Menu theme='dark' mode='horizontal' selectable={false}>
						<Menu.Item 
							onClick={() => navigate('/login')} 
							key='1'>
							Login
						</Menu.Item>
					</Menu>
				}
			</Row>
		</Layout.Header>
	)
}

export default Navbar;