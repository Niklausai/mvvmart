import React, { useState } from 'react';
import { useLocation } from 'wouter';
import MainLayoutSimple from '@/components/layouts/main-layout-simple';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { Package, CreditCard, Clock, ShoppingCart, User, LogOut } from 'lucide-react';

const AccountPageSimple = () => {
  const [, navigate] = useLocation();
  
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2023',
  };

  // Mock orders data
  const orders = [
    {
      id: 'INV-5162',
      date: '2023-04-15',
      items: [{ name: 'Visa Card', quantity: 1 }],
      total: 19.99,
      status: 'completed',
    },
    {
      id: 'INV-4271',
      date: '2023-03-22',
      items: [{ name: 'Mastercard', quantity: 1 }],
      total: 24.00,
      status: 'completed',
    },
    {
      id: 'INV-3841',
      date: '2023-02-10',
      items: [{ name: 'Discover Card', quantity: 1 }],
      total: 19.00,
      status: 'completed',
    },
  ];

  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      type: 'MoMo Pay',
      number: '+233 26 910 1851',
      default: true,
    },
    {
      id: 2,
      type: 'Bank Transfer',
      number: '**** **** 4385',
      default: false,
    },
  ];

  return (
    <MainLayoutSimple>
      <main className="container px-4 py-8 mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600">Manage your account details and view your purchase history</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-1 mb-6">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
                </div>
                
                <nav className="space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {}}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {}}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/home')}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {}}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Account Settings
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-600"
                    onClick={() => navigate('/login')}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="orders">
              <TabsList className="mb-6">
                <TabsTrigger value="orders">My Orders</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                <TabsTrigger value="settings">Account Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {orders.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Products</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orders.map((order) => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">{order.id}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>
                                {order.items.map((item, i) => (
                                  <div key={i}>{item.name} x{item.quantity}</div>
                                ))}
                              </TableCell>
                              <TableCell>{formatCurrency(order.total)}</TableCell>
                              <TableCell>
                                <Badge 
                                  variant={order.status === 'completed' ? 'default' : 'outline'}
                                  className={order.status === 'completed' ? 'bg-green-500' : ''}
                                >
                                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button variant="outline" size="sm">View</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="text-center py-10">
                        <Clock className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                        <h3 className="text-lg font-medium text-gray-900">No orders yet</h3>
                        <p className="text-gray-600 mt-1">When you make a purchase, it will appear here.</p>
                        <Button 
                          className="mt-4" 
                          variant="outline"
                          onClick={() => navigate('/home')}
                        >
                          Continue Shopping
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div 
                          key={method.id} 
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex items-center">
                            <div className="mr-4">
                              <CreditCard className="h-6 w-6 text-gray-500" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{method.type}</div>
                              <div className="text-sm text-gray-600">{method.number}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {method.default && (
                              <Badge className="mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
                                Default
                              </Badge>
                            )}
                            <Button variant="ghost" size="sm">Edit</Button>
                          </div>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full mt-4">
                        <span className="mr-2">+</span> Add Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Profile Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-500">Name</div>
                            <div className="text-gray-900">{user.name}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-500">Email</div>
                            <div className="text-gray-900">{user.email}</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-4">
                          Edit Profile
                        </Button>
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="font-medium text-gray-900 mb-2">Security</h3>
                        <Button variant="outline" size="sm">
                          Change Password
                        </Button>
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="font-medium text-gray-900 mb-2">Preferences</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>Email notifications</div>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>Two-factor authentication</div>
                            <Button variant="outline" size="sm">
                              Enable
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="font-medium text-red-600 mb-2">Danger Zone</h3>
                        <Button variant="outline" className="text-red-600 border-red-300">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </MainLayoutSimple>
  );
};

export default AccountPageSimple;