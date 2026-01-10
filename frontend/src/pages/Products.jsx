import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Industrial Widget A',
    category: 'Hardware',
    sku: '100234',
    minOrder: '50 units',
    price: 12.50,
    unit: 'unit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdvfKTOPl7ywcBDgvaFp6bUftMRa3WyDu0_vZwPzWjBwKPpRGTooAgDwWneZrgjNQ02MorpPuJGOcxIFaKcXhSLP1T5Xd6IdkAIaLztEfM1r-8KF1kSvfSS9C2cEj1csq2sanSPh2b6OamVCX7pn0d7rTQtESU8hFRyp_V_dYhjNS7t2osGS1qFerag6YRVlPEx1UuAErhJidfLMyoZZ4Irm0OtTtZrlHI56WV5kX_ehmLmCq_i3c38DN16TduPxQ0wJuaNFBXlp93',
  },
  {
    id: 2,
    name: 'Smart Sensor X',
    category: 'Electronics',
    sku: '100890',
    minOrder: '10 units',
    price: 89.99,
    unit: 'unit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxK64UsWoQ2HpCb6t3mrNJ44DxSuLOUFrg723QHo-MG2ondPgtG_tfaCiELmWNGLWSKfT0cqM6qAmXPacY-MXJzGwYMA0pzVzEbJSO4k3CEZan5Hifcvti1P_Iv28EyeRit4jmyg39NRKaUP1iXTYhxtfV0ddxS45NuOttJ7_iOooV7qlDF0MlwavFAFT9m2o2hwtfuxorso2FNabDSc0EUSWzqpqUBlctH1SebWn-TBPVKu1FDyXbWo4pAnClJLHnmRR6NvfT6P1M',
  },
  {
    id: 3,
    name: 'Heavy Duty Gear',
    category: 'Mechanical',
    sku: '100123',
    minOrder: '20 units',
    price: 120.00,
    unit: 'unit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcJujggO4-JB6CDwpVg8OGFLjBAN55aLWTB3aA2sCPvRzYYJLvJ0deleqqbR-oAD5jvYHQeqD0cGICCfv2SXkBVBhON3NRjYXHdzYpS8PrIyd99FD1nJOA_tXhCAu7z-Y4DQofiC560A0Ui33KsU0qkHR0f3Shaxu-sjr2738DzgDplw78nctmHOvuhrvsuS0c0zs7klAMldOzyjKWwlb_JzF5A1l-fTaxr2reCwqKYFfrjh3oMHmHJF9X10ibAL2ww-utKcybE5g5',
  },
  {
    id: 4,
    name: 'Wholesale Cable',
    category: 'Infrastructure',
    sku: '100789',
    minOrder: '500m',
    price: 8.25,
    unit: 'm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2zQYGdA-N8vrOHDBpEbbqjtdwNuTaOGa8Czx8uYsNF-zMLlD3R6YC3_nwt3wsg7Beo4A9mxi8If1yrI5ikrgdftWy239pRMY0oKn3iztYLfchb_BcJUxB7agOVaamHr2jOFwZ7RC4JNp1NWLebns0MJCVJJ2utEUBEJrPjl5zB-s1ZMZS-UlOrFlEgUWUS8nrSrSvqZMsWYR50gsnxa8qIoZIjcOgWZmxD7M7UtGF4Z769kr44ceB1e7MWXg37vGCotSK9G0FTj70',
  },
  {
    id: 5,
    name: 'Precision Bearing',
    category: 'Mechanical',
    sku: '100456',
    minOrder: '100 units',
    price: 24.99,
    unit: 'unit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcJujggO4-JB6CDwpVg8OGFLjBAN55aLWTB3aA2sCPvRzYYJLvJ0deleqqbR-oAD5jvYHQeqD0cGICCfv2SXkBVBhON3NRjYXHdzYpS8PrIyd99FD1nJOA_tXhCAu7z-Y4DQofiC560A0Ui33KsU0qkHR0f3Shaxu-sjr2738DzgDplw78nctmHOvuhrvsuS0c0zs7klAMldOzyjKWwlb_JzF5A1l-fTaxr2reCwqKYFfrjh3oMHmHJF9X10ibAL2ww-utKcybE5g5',
  },
  {
    id: 6,
    name: 'Power Module Z',
    category: 'Electronics',
    sku: '100567',
    minOrder: '25 units',
    price: 156.00,
    unit: 'unit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxK64UsWoQ2HpCb6t3mrNJ44DxSuLOUFrg723QHo-MG2ondPgtG_tfaCiELmWNGLWSKfT0cqM6qAmXPacY-MXJzGwYMA0pzVzEbJSO4k3CEZan5Hifcvti1P_Iv28EyeRit4jmyg39NRKaUP1iXTYhxtfV0ddxS45NuOttJ7_iOooV7qlDF0MlwavFAFT9m2o2hwtfuxorso2FNabDSc0EUSWzqpqUBlctH1SebWn-TBPVKu1FDyXbWo4pAnClJLHnmRR6NvfT6P1M',
  },
  {
    id: 7,
    name: 'Steel Fastener Kit',
    category: 'Hardware',
    sku: '100678',
    minOrder: '200 units',
    price: 5.75,
    unit: 'unit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdvfKTOPl7ywcBDgvaFp6bUftMRa3WyDu0_vZwPzWjBwKPpRGTooAgDwWneZrgjNQ02MorpPuJGOcxIFaKcXhSLP1T5Xd6IdkAIaLztEfM1r-8KF1kSvfSS9C2cEj1csq2sanSPh2b6OamVCX7pn0d7rTQtESU8hFRyp_V_dYhjNS7t2osGS1qFerag6YRVlPEx1UuAErhJidfLMyoZZ4Irm0OtTtZrlHI56WV5kX_ehmLmCq_i3c38DN16TduPxQ0wJuaNFBXlp93',
  },
  {
    id: 8,
    name: 'Industrial Pipe',
    category: 'Infrastructure',
    sku: '100901',
    minOrder: '100m',
    price: 15.50,
    unit: 'm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2zQYGdA-N8vrOHDBpEbbqjtdwNuTaOGa8Czx8uYsNF-zMLlD3R6YC3_nwt3wsg7Beo4A9mxi8If1yrI5ikrgdftWy239pRMY0oKn3iztYLfchb_BcJUxB7agOVaamHr2jOFwZ7RC4JNp1NWLebns0MJCVJJ2utEUBEJrPjl5zB-s1ZMZS-UlOrFlEgUWUS8nrSrSvqZMsWYR50gsnxa8qIoZIjcOgWZmxD7M7UtGF4Z769kr44ceB1e7MWXg37vGCotSK9G0FTj70',
  },
]

const categories = ['All', 'Hardware', 'Electronics', 'Mechanical', 'Infrastructure']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              420+ Products Available
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Product Catalog
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              High-quality wholesale components for bulk orders. Direct from manufacturers with competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input
                type="text"
                placeholder="Search products or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-slate-900 dark:text-white"
              />
            </div>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:translate-y-[-4px]"
              >
                <div
                  className="aspect-square w-full bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url("${product.image}")` }}
                ></div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    SKU: {product.sku} - Min {product.minOrder}
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                      ${product.price.toFixed(2)}
                      <small className="font-normal text-xs text-slate-500">/{product.unit}</small>
                    </span>
                    <button className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all">
                      <span className="material-icons text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <span className="material-icons text-6xl text-slate-300 dark:text-slate-600 mb-4">inventory_2</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No products found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Load More */}
          {filteredProducts.length > 0 && (
            <div className="mt-12 text-center">
              <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                View All 420+ Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Need custom bulk pricing?
                </h2>
                <p className="text-lg text-white/80 max-w-xl">
                  Contact our sales team for volume discounts and custom manufacturing options tailored to your business needs.
                </p>
              </div>
              <a
                href="/about#contact"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-all shadow-xl whitespace-nowrap"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
