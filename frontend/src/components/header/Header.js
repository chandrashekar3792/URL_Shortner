import React, { Component } from 'react';
import '../../styles/App.css';
import { Link } from 'react-router-dom';
import textLogo from '../../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler} from 'reactstrap';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		isOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNav() {
		if (this.state.isOpen == true) {
			this.toggle();
		}
	}


	render() {
	return (
		<div className='navbar-container'>
			<Navbar id='white-nav' color='light' light expand='md'>
				<NavbarBrand href="/"><Link to="/"><img src={textLogo}/></Link></NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav navbar className='ml-auto'>
						<NavItem>
							<Link to="/" className='padded-nav'> HOME </Link>
						</NavItem>

						<NavItem>
							<Link to="/about" className='padded-nav'> ABOUT </Link>
						</NavItem>

						<NavItem>
							<a href='https://instacar.in/' target='_blank' to="/contact-us" className='padded-nav' onClick={this.closeNav} > CONTACT </a>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
    );
  }
}