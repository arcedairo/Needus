<script>
import Menu from "./Menu.svelte";
export let link
let dropdownOpen = false
</script>

<li class="dropdown">
<div on:click="{() => dropdownOpen = ! dropdownOpen}">
<span>{link.dropdown}</span>
</div>
<Menu {link} {dropdownOpen}/>
</li>