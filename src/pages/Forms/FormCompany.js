import axios from 'axios';
import React, { useEffect, useState } from "react";
import
{
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Table
} from "reactstrap";

import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormCompany = () =>
{
  const [activeTab, setactiveTab] = useState( 1 );
  const [companies, setCompanies] = useState( [] );

  useEffect( () =>
  {
    async function getCompanies ()
    {
      try
      {
        // const data = await axios( `https://healthalysis-26b9b67398b2.herokuapp.com/company` );
        const resp = await fetch( `${ process.env.REACT_APP_BACKENDURL }/company` );
        const data = await resp.json();
        setCompanies( data );
      } catch ( error )
      {
        console.log( error );
      }
    }
    getCompanies();
  }, [] );

  console.log( companies );

  function toggleTab ( tab )
  {
    if ( activeTab !== tab )
    {
      if ( tab >= 1 && tab <= 4 )
      {
        setactiveTab( tab );
      }
    }
  }


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={ true }>
          <Breadcrumbs title="Forms" breadcrumbItem="Create Company" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Company Info</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={ classnames( { current: activeTab === 1 } ) }>
                          <NavLink
                            className={ classnames( { current: activeTab === 1 } ) }
                            onClick={ () =>
                            {
                              setactiveTab( 1 );
                            } }
                          >
                            <span className="number">1.</span>{ " " }
                            Company Details
                          </NavLink>
                        </NavItem>
                        <NavItem className={ classnames( { current: activeTab === 2 } ) }>
                          <NavLink
                            className={ classnames( { active: activeTab === 2 } ) }
                            onClick={ () =>
                            {
                              setactiveTab( 2 );
                            } }
                          >
                            <span className="number me-2">2.</span>{ " " }
                            Branch Info
                          </NavLink>
                        </NavItem>
                        <NavItem className={ classnames( { current: activeTab === 4 } ) }>
                          <NavLink
                            className={ classnames( { active: activeTab === 4 } ) }
                            onClick={ () =>
                            {
                              setactiveTab( 4 );
                            } }
                          >
                            <span className="number">4.</span>{ " " }
                            Confirm Detail
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <div className="body">
                        <TabContent
                          activeTab={ activeTab }
                        >
                          <TabPane tabId={ 1 }>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="company-name">
                                      Company name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="company-name"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="email">
                                      Email
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="email"
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="domain">
                                      Domain
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="domain"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="image">
                                      Image
                                    </Label>
                                    <Input
                                      type="file"
                                      className="form-control"
                                      id="image"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="address">
                                      Address
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      rows="2"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="status">
                                      Status
                                    </Label>
                                    <Input
                                      id="exampleSelect"
                                      name="select"
                                      type="select"
                                    >
                                      <option value='1'>
                                        Active
                                      </option>
                                      <option value='2'>
                                        Inactive
                                      </option>
                                    </Input>
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="language">
                                      Default Language
                                    </Label>
                                    <Input
                                      id="exampleSelect"
                                      name="select"
                                      type="select"
                                    >
                                      <option value='eng'>
                                        English
                                      </option>
                                      <option value='esp'>
                                        Spanish
                                      </option>
                                    </Input>
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </TabPane>
                          <TabPane tabId={ 2 }>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="branch-name">
                                        Branch name
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="branch-name"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="branch-Email">
                                        Branch email
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="branch-Email"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="phone-number">
                                        Phone number
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="phone-number"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="Image">
                                        Image
                                      </Label>
                                      <Input
                                        type="file"
                                        className="form-control"
                                        id="Image"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="status">
                                        Status
                                      </Label>
                                      <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                      >
                                        <option value='1'>
                                          Active
                                        </option>
                                        <option value='2'>
                                          Inactive
                                        </option>
                                      </Input>
                                    </div>
                                  </Col>

                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={ 4 }>
                            <div className="row justify-content-center">
                              <Col lg="6">
                                <div className="text-center">
                                  <div className="mb-4">
                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                  </div>
                                  <div>
                                    <h5>Confirm Detail</h5>
                                    <p className="text-muted">
                                      Company created sucessfully
                                    </p>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={ () =>
                            {
                              toggleTab( activeTab - 1 );
                            } }
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={ activeTab === 4 ? "next disabled" : "next" }
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={ () =>
                            {
                              toggleTab( activeTab + 1 );
                            } }
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={ 12 }>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Companies </CardTitle>
                  <p className="card-title-desc">
                    See the registered companies
                  </p>

                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Company ID</th>
                          <th>Company Name</th>
                          <th>Company Domain</th>
                          <th>Company Status</th>
                          <th>Default Language</th>

                        </tr>
                      </thead>
                      <tbody>
                        {
                          companies.map( ( company, index ) => (
                            company.companyStatus === 1
                              ?
                              <tr key={ company.companyId } className="table-success">
                                <th scope="row">{ index }</th>
                                <td>{ company.companyId }</td>
                                <td>{ company.name }</td>
                                <td>{ company.domain }</td>
                                <td>{ company.companyStatus === 1 ? 'Active' : 'Inactive' }</td>
                                <td>{ company.defaultLanguage }</td>
                              </tr>
                              :
                              <tr key={ company.companyId } className="table-danger">
                                <th scope="row">{ index }</th>
                                <td>{ company.companyId }</td>
                                <td>{ company.name }</td>
                                <td>{ company.domain }</td>
                                <td>{ company.companyStatus === 1 ? 'Active' : 'Inactive' }</td>
                                <td>{ company.defaultLanguage }</td>
                              </tr>
                          ) )
                        }


                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormCompany;
