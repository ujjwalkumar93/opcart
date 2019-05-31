import frappe
from frappe import throw, _
import frappe.defaults
from frappe.utils import cint, flt, get_fullname, cstr
from frappe.contacts.doctype.address.address import get_address_display
from erpnext.shopping_cart.doctype.shopping_cart_settings.shopping_cart_settings import get_shopping_cart_settings
from frappe.utils.nestedset import get_root_of
from erpnext.accounts.utils import get_account_name
from erpnext.utilities.product import get_qty_in_stock
from erpnext.portal.product_configurator.utils import (get_products_for_website, get_product_settings,
	get_field_filter_data, get_attribute_filter_data)

sitemap = 1

def get_context(context):
	items = frappe.get_all('Item', filters={'show_in_website':1 }, fields=['item_group'])
	context.items=items
	context.item_group=items.item_group
	#context.item_code=items.item_code
	#context.item_group=frappe.get_all('Item Group')
    #context['item_group'] = frappe.get_all('Item Group')
	#context.item_group = frappe.get_all('Item Group')
	#context.item_group=items.item_group
	#groups = frappe.get_all('Item Group',filters={'show_in_website':1 }, fields=['item_group_name'])
