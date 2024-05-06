---
title: Website
description: Creacion de nuevo diseño en la pagina web institucional
---
## Recordatorios importantes en el codigo

### Footer CSS

Este codigo se retiro del CSS creado en elementor debido a que no aplican las propiedas descritas a los elementos actuales ya que fueron creados con thim.

```
selector .thim-header-info span {
    float: right;
    margin-left: 8px;
}
selector .thim-header-info a {
    display: inline-block;
}
selector .thim-header-info a span {
    margin-top: 5px;
    margin-bottom: -5px;
}
footer#colophon .footer {
    border-top: 1px solid var(--thim-border-color);
}
```
### Sidebar eventos

El cambiar este elemento de true a false debido a que en este momento no se requiere hacer compra de boletos.

```
$theme_options_data = get_theme_mods();
$show_booking     = !empty( $theme_options_data['thim_event_disable_book_event'] ) ? false : false;
if ( !is_active_sidebar( 'sidebar_events' ) && !$show_booking ) {
	return;
}

```