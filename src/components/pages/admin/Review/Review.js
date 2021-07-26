import React from 'react';
import {Button, Card, Typography, Select, Form, Input, Col, Row} from "antd";

const {Option} = Select;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

const AdminReview = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Typography.Title level={2}>Revisión técnica</Typography.Title>
            <Card style={{background: "rgb(255, 200, 200)", borderRadius: "10px"}}>
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Row gutter={24}>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Cliente:</Typography.Text>
                                <Select
                                    showSearch
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="juan">
                                        <Typography.Text>Juan</Typography.Text>
                                    </Option>
                                    <Option value="pedro">
                                        <Typography.Text>Pedro</Typography.Text>
                                    </Option>
                                    <Option value="jorge">
                                        <Typography.Text>Jorge</Typography.Text>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Taller:</Typography.Text>
                                <Select
                                    showSearch
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="sanvicente">
                                        <Typography.Text>San Vicente</Typography.Text>
                                    </Option>
                                    <Option value="asia">
                                        <Typography.Text>Asia</Typography.Text>
                                    </Option>
                                    <Option value="mala">
                                        <Typography.Text>Mala</Typography.Text>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Email:</Typography.Text>
                                <Input/>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Fecha:</Typography.Text>
                                <Input disabled/>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Tipo de vehículo:</Typography.Text>
                                <Select
                                    showSearch
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="confirmar">
                                        <Typography.Text>Confirmar</Typography.Text>
                                    </Option>
                                    <Option value="rechazar">
                                        <Typography.Text>Rechazar</Typography.Text>
                                    </Option>
                                    <Option value="espera">
                                        <Typography.Text>En espera</Typography.Text>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Tipo de revisión:</Typography.Text>
                                <Select
                                    showSearch
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="confirmar">
                                        <Typography.Text>Confirmar</Typography.Text>
                                    </Option>
                                    <Option value="rechazar">
                                        <Typography.Text>Rechazar</Typography.Text>
                                    </Option>
                                    <Option value="espera">
                                        <Typography.Text>En espera</Typography.Text>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Condición del vehículo:</Typography.Text>
                                <Input.TextArea rows={4} onScroll={true}/>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item>
                                <Typography.Text strong>Características:</Typography.Text>
                                <Input.TextArea rows={4} onScroll={true}/>
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item>
                                <Typography.Text strong>Detalle del técnico:</Typography.Text>
                                <Input.TextArea rows={5} onScroll={true}/>
                            </Form.Item>
                        </Col>

                    </Row>

                    <Form.Item
                        style={{width: "min-content", margin: "auto"}}
                    >
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Guardar y enviar resultado
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
};

export default AdminReview;
