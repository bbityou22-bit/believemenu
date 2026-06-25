
// Believes Skidded Menu
// Warning: Ugly code. I hate TypeScript.


declare const Il2Cpp: any;
declare const console: any;
declare const XRNode: any;
declare const AnimalCompany: any;
declare const IIl2Cpp: any;

const raw = {
  "il2cpp_init": "vzm_mkcAWoQ",
  "il2cpp_init_utf16": "qjXlkxrRckE",
  "il2cpp_shutdown": "uyeOLmpKDh_",
  "il2cpp_set_config_dir": "RbunzyWwydy",
  "il2cpp_set_data_dir": "qB_vBRoUWer",
  "il2cpp_set_temp_dir": "DYcbuysvUMU",
  "il2cpp_set_commandline_arguments": "HUWPrwKDHiB",
  "il2cpp_set_commandline_arguments_utf16": "GajXUXkeRUB",
  "il2cpp_set_config_utf16": "CzaFxvrepZL",
  "il2cpp_set_config": "KyjXrrKGauH",
  "il2cpp_set_memory_callbacks": "AlQeLfBwVqz",
  "il2cpp_memory_pool_set_region_size": "mPNAuyjbKxU",
  "il2cpp_memory_pool_get_region_size": "xJoNqWfLklo",
  "il2cpp_get_corlib": "yfhoTCMsXwl",
  "il2cpp_add_internal_call": "ITlNrZgFnzB",
  "il2cpp_resolve_icall": "EdYmSzZDXON",
  "il2cpp_alloc": "hPnKvrqqVkL",
  "il2cpp_free": "esCigKpiIpS",
  "il2cpp_array_class_get": "VsTlixHJy_s",
  "il2cpp_array_length": "WDwonWtRtrM",
  "il2cpp_array_get_byte_length": "e_SQWoFENnV",
  "il2cpp_array_new": "WVgfgoKRBpX",
  "il2cpp_array_new_specific": "ULFgBsURQPt",
  "il2cpp_array_new_full": "KmXWKDqGiOp",
  "il2cpp_bounded_array_class_get": "zWUnZilQdxc",
  "il2cpp_array_element_size": "nsRgVMuG_RB",
  "il2cpp_assembly_get_image": "PQYnvAePjFp",
  "il2cpp_class_for_each": "rtVtdAmtxqF",
  "il2cpp_class_enum_basetype": "CubPpmmx_Uy",
  "il2cpp_class_is_inited": "q_jQDrd_TgJ",
  "il2cpp_class_is_generic": "PsmuRVNBfxk",
  "il2cpp_class_is_inflated": "zfBzLHwOWBP",
  "il2cpp_class_is_assignable_from": "qbrhATmILQm",
  "il2cpp_class_is_subclass_of": "yuyRtcTqPfW",
  "il2cpp_class_has_parent": "lcUVZiFaDKY",
  "il2cpp_class_from_il2cpp_type": "EYucBTiyXQW",
  "il2cpp_class_from_name": "nZgHGzSKaXj",
  "il2cpp_class_from_system_type": "AG_UaBzxuMC",
  "il2cpp_class_get_element_class": "rJoAJIseZzC",
  "il2cpp_class_get_events": "jWMnPiUodQm",
  "il2cpp_class_get_fields": "dtvlgQqcjNG",
  "il2cpp_class_get_nested_types": "HlAoHtjLlTr",
  "il2cpp_class_get_interfaces": "MLmzBSbizjV",
  "il2cpp_class_get_properties": "ZFWRYZtXFnO",
  "il2cpp_class_get_property_from_name": "WTlQPVTkRhg",
  "il2cpp_class_get_field_from_name": "XdxZkAFJBku",
  "il2cpp_class_get_methods": "RmMtftShGhA",
  "il2cpp_class_get_method_from_name": "nAQlcshGYBe",
  "il2cpp_class_get_name": "mXqUuqWdWAm",
  "il2cpp_type_get_name_chunked": "kzkwrxXzYok",
  "il2cpp_class_get_namespace": "LnfOBdWy_zJ",
  "il2cpp_class_get_parent": "iAQziMAXtkj",
  "il2cpp_class_get_declaring_type": "ghzZgsgNylE",
  "il2cpp_class_instance_size": "QprCHpcKETk",
  "il2cpp_class_num_fields": "MixXFTcGZpM",
  "il2cpp_class_is_valuetype": "nWdOdbfTzFu",
  "il2cpp_class_value_size": "rgEmcUTLNUx",
  "il2cpp_class_is_blittable": "Qf_WiQzqClZ",
  "il2cpp_class_get_flags": "QdCVjZaYCbi",
  "il2cpp_class_is_abstract": "BTmvtNMdOGJ",
  "il2cpp_class_is_interface": "FIZaVdEKPrG",
  "il2cpp_class_array_element_size": "NruGKyS_Yml",
  "il2cpp_class_from_type": "AvzxYejfhhQ",
  "il2cpp_class_get_type": "xu_JZflccgI",
  "il2cpp_class_get_type_token": "yOqHQWQGtoh",
  "il2cpp_class_has_attribute": "GldPBiwZcvq",
  "il2cpp_class_has_references": "gMwjkNWnmxr",
  "il2cpp_class_is_enum": "FWgQtGTdqSa",
  "il2cpp_class_get_image": "VDLgHQbYQWE",
  "il2cpp_class_get_assemblyname": "eQAuNLpVVvS",
  "il2cpp_class_get_rank": "gVtdwEEbeZz",
  "il2cpp_class_get_data_size": "mWJIiGyBFGN",
  "il2cpp_class_get_static_field_data": "NpoQbYREaRC",
  "il2cpp_stats_dump_to_file": "qYzYmbHcvgH",
  "il2cpp_stats_get_value": "FsHznmrJ_Nv",
  "il2cpp_domain_get": "snFEUyUDPjz",
  "il2cpp_domain_assembly_open": "ZnlHWJKmqDF",
  "il2cpp_domain_get_assemblies": "JZwhxGwe_Ug",
  "il2cpp_raise_exception": "fKGCVnieTBq",
  "il2cpp_exception_from_name_msg": "OUjmAjCWfBA",
  "il2cpp_get_exception_argument_null": "kqjWTfzHjuM",
  "il2cpp_format_exception": "giYhsWNuWzf",
  "il2cpp_format_stack_trace": "KzBdiCmDXnQ",
  "il2cpp_unhandled_exception": "sEATJ_eduhE",
  "il2cpp_native_stack_trace": "BdcWHAyWcVj",
  "il2cpp_field_get_flags": "fuOWmPzKNxR",
  "il2cpp_field_get_from_reflection": "NcGudSwjsXY",
  "il2cpp_field_get_name": "pSWcFhPbQIL",
  "il2cpp_field_get_parent": "Sy_ygsJqIIc",
  "il2cpp_field_get_object": "qhXRsepMZJg",
  "il2cpp_field_get_offset": "zXczstGEUGx",
  "il2cpp_field_get_type": "eVTXGCrANLy",
  "il2cpp_field_get_value": "fPBsAPBfb_t",
  "il2cpp_field_get_value_object": "KAWFRVpiZwN",
  "il2cpp_field_has_attribute": "NlTRljTRzaa",
  "il2cpp_field_set_value": "flNCSQPy_rM",
  "il2cpp_field_static_get_value": "RmCTWZOZeeJ",
  "il2cpp_field_static_set_value": "ByqvQWQwoom",
  "il2cpp_field_set_value_object": "XKoHhGgkRhx",
  "il2cpp_field_is_literal": "zRjCorfwfZO",
  "il2cpp_gc_collect": "IreAuPt_vKZ",
  "il2cpp_gc_collect_a_little": "mILVSJppKpU",
  "il2cpp_gc_start_incremental_collection": "BvySLEraMwy",
  "il2cpp_gc_disable": "axDfjWhWQQN",
  "il2cpp_gc_enable": "LFPlgGEMplW",
  "il2cpp_gc_is_disabled": "wAvuhMS_VFJ",
  "il2cpp_gc_set_mode": "vZtCmtrkUkA",
  "il2cpp_gc_get_max_time_slice_ns": "ASubvCQPqkx",
  "il2cpp_gc_set_max_time_slice_ns": "UICDiZljIVX",
  "il2cpp_gc_is_incremental": "jVQRDXtfGCP",
  "il2cpp_gc_get_used_size": "rtOcYmTykMY",
  "il2cpp_gc_get_heap_size": "AhSaKRPyfXo",
  "il2cpp_gc_wbarrier_set_field": "nNEbrwsZFBP",
  "il2cpp_gc_has_strict_wbarriers": "OrpqzXlGlIG",
  "il2cpp_gc_set_external_allocation_tracker": "jgHLCJEMDUS",
  "il2cpp_gc_set_external_wbarrier_tracker": "N_DJUXFlzsP",
  "il2cpp_gc_foreach_heap": "rmqEluXeIwv",
  "il2cpp_stop_gc_world": "GUHlZaQQLtL",
  "il2cpp_start_gc_world": "PMcAsFWpZAe",
  "il2cpp_gc_alloc_fixed": "TOnqwMiEJCb",
  "il2cpp_gc_free_fixed": "VdmduNKqzcn",
  "il2cpp_gchandle_new": "GKVNovdfUHe",
  "il2cpp_gchandle_new_weakref": "sDYZLWhdjsd",
  "il2cpp_gchandle_get_target": "RdqaQpJHGmE",
  "il2cpp_gchandle_free": "_UsVjAlUEwg",
  "il2cpp_gchandle_foreach_get_target": "gyErIIhAsNx",
  "il2cpp_object_header_size": "nRwIEMEsMfk",
  "il2cpp_array_object_header_size": "FRWqIWOaAQB",
  "il2cpp_offset_of_array_length_in_array_object_header": "BIWWruvgYrg",
  "il2cpp_offset_of_array_bounds_in_array_object_header": "UAtMjOxTHEQ",
  "il2cpp_allocation_granularity": "f_LVLDYyveN",
  "il2cpp_unity_liveness_allocate_struct": "xIDytamUcFX",
  "il2cpp_unity_liveness_calculation_from_root": "fATMSIjRpIX",
  "il2cpp_unity_liveness_calculation_from_statics": "BmQBCTfebcF",
  "il2cpp_unity_liveness_finalize": "EAWHcpAfoyS",
  "il2cpp_unity_liveness_free_struct": "AtuxcKTCfhz",
  "il2cpp_method_get_return_type": "OjOGYWjZp_C",
  "il2cpp_method_get_declaring_type": "QTLairwpkqu",
  "il2cpp_method_get_name": "WYvkJwpAxft",
  "il2cpp_method_get_from_reflection": "UrscdEqfGjx",
  "il2cpp_method_get_object": "pMheyQqMqno",
  "il2cpp_method_is_generic": "JvnHcOfmvEj",
  "il2cpp_method_is_inflated": "gVyvgNqMnRF",
  "il2cpp_method_is_instance": "qpC_MNtViNk",
  "il2cpp_method_get_param_count": "xPlRRbWNqrt",
  "il2cpp_method_get_param": "skEFeRDFzUj",
  "il2cpp_method_get_class": "FnkADtgntFR",
  "il2cpp_method_has_attribute": "QDlbEpWsJZv",
  "il2cpp_method_get_flags": "QxMFHVaNXNK",
  "il2cpp_method_get_token": "ECEgqhfAkuH",
  "il2cpp_method_get_param_name": "XzqklIdzUCA",
  "il2cpp_property_get_flags": "pfqHpVBZNjO",
  "il2cpp_property_get_get_method": "MS_KwjHDYhY",
  "il2cpp_property_get_set_method": "BPwwpxtaMQr",
  "il2cpp_property_get_name": "JgVfoaxPikv",
  "il2cpp_property_get_parent": "shBiGaAtdji",
  "il2cpp_object_get_class": "YijXdtarReX",
  "il2cpp_object_get_size": "ZMGTHUUqKQX",
  "il2cpp_object_get_virtual_method": "JyrYKzUXeFZ",
  "il2cpp_object_new": "lVKrYODTixs",
  "il2cpp_object_unbox": "FMoKleIUwkN",
  "il2cpp_value_box": "_xlNuxRpCqd",
  "il2cpp_monitor_enter": "aAqqrkTgbGH",
  "il2cpp_monitor_try_enter": "xCAAQWvuzmk",
  "il2cpp_monitor_exit": "kBVjhzDlyUK",
  "il2cpp_monitor_pulse": "qrLXsuyQhbp",
  "il2cpp_monitor_pulse_all": "qIdQwixRcwr",
  "il2cpp_monitor_wait": "Ojx_IAuMSYL",
  "il2cpp_monitor_try_wait": "UNDDI_smyPN",
  "il2cpp_runtime_invoke": "XgaiMjbESoF",
  "il2cpp_runtime_invoke_convert_args": "WWa_cJtdpzI",
  "il2cpp_runtime_class_init": "CcbQSQYzbIn",
  "il2cpp_runtime_object_init": "aCreUIMFuui",
  "il2cpp_runtime_object_init_exception": "RhTPBMZzWGB",
  "il2cpp_runtime_unhandled_exception_policy_set": "gILZtgN_GAq",
  "il2cpp_string_length": "TLqWNjtNbrk",
  "il2cpp_string_chars": "QmIDYaGOOSu",
  "il2cpp_string_new": "zm_TnaWUthA",
  "il2cpp_string_new_len": "EAyljOksjgM",
  "il2cpp_string_new_utf16": "UGLcZh_XTdZ",
  "il2cpp_string_new_wrapper": "zHAswHeRiRf",
  "il2cpp_string_intern": "YpctUjPfL_R",
  "il2cpp_string_is_interned": "tWENFdgnxth",
  "il2cpp_thread_current": "qOLvlGzPzrp",
  "il2cpp_thread_attach": "ydayGqzrVvQ",
  "il2cpp_thread_detach": "zsnwoocRqEW",
  "il2cpp_is_vm_thread": "FuiPBqQdCzM",
  "il2cpp_current_thread_walk_frame_stack": "jgriLtbYcWS",
  "il2cpp_thread_walk_frame_stack": "NzFPHTSmGnt",
  "il2cpp_current_thread_get_top_frame": "nHZnhFRvXUM",
  "il2cpp_thread_get_top_frame": "JZVUeBansGU",
  "il2cpp_current_thread_get_frame_at": "LuXDyXbfois",
  "il2cpp_thread_get_frame_at": "HETJqMKFsLH",
  "il2cpp_current_thread_get_stack_depth": "ZICBpBlMbDP",
  "il2cpp_thread_get_stack_depth": "_RHnkLyONMN",
  "il2cpp_override_stack_backtrace": "lUWJOzvMaIu",
  "il2cpp_type_get_object": "rODmyWINvSc",
  "il2cpp_type_get_type": "IOSCNDZaajO",
  "il2cpp_type_get_class_or_element_class": "XyiAXiiJBZU",
  "il2cpp_type_get_name": "ILvjLMuuOkT",
  "il2cpp_type_is_byref": "nl_TPZtbqTe",
  "il2cpp_type_get_attrs": "LbazMPKrgTd",
  "il2cpp_type_equals": "pwrQPvKzM_I",
  "il2cpp_type_get_assembly_qualified_name": "IwtiU_AwFOY",
  "il2cpp_type_get_reflection_name": "IARiGLbekhN",
  "il2cpp_type_is_static": "VMxOkCPfYTv",
  "il2cpp_type_is_pointer_type": "nKPkKye_SjN",
  "il2cpp_image_get_assembly": "TommXUDRwzZ",
  "il2cpp_image_get_name": "XsqNxTWoJFJ",
  "il2cpp_image_get_filename": "mQfAAlTaabT",
  "il2cpp_image_get_entry_point": "FEITiSQddfj",
  "il2cpp_image_get_class_count": "AUsKFiZQ_Gm",
  "il2cpp_image_get_class": "TJaQpyAyaVJ",
  "il2cpp_capture_memory_snapshot": "LozSuZLIegf",
  "il2cpp_free_captured_memory_snapshot": "iMgkGgaTXfm",
  "il2cpp_set_find_plugin_callback": "HjdZCltTHWs",
  "il2cpp_register_log_callback": "bOsGYTQAeMw",
  "il2cpp_debugger_set_agent_options": "GbKgERSaxdF",
  "il2cpp_is_debugger_attached": "UqqbIqJCqsM",
  "il2cpp_register_debugger_agent_transport": "EWAXPTKl_Cs",
  "il2cpp_debug_foreach_method": "QbruJetUihF",
  "il2cpp_debug_get_method_info": "YnBwIibmLIX",
  "il2cpp_unity_install_unitytls_interface": "dCuYEerILHF",
  "il2cpp_custom_attrs_from_class": "eNnBMqcilAN",
  "il2cpp_custom_attrs_from_method": "zbKCWGlICnb",
  "il2cpp_custom_attrs_from_field": "KoVJcfpcCnO",
  "il2cpp_custom_attrs_get_attr": "UvbgzjHVOUW",
  "il2cpp_custom_attrs_has_attr": "UHZlYgDwMfO",
  "il2cpp_custom_attrs_construct": "CbMzOojQkoh",
  "il2cpp_custom_attrs_free": "HLPgjzkUxpL",
  "il2cpp_class_set_userdata": "eVrpEgPKmgO",
  "il2cpp_class_get_userdata_offset": "pOjJ_tTBLxc",
  "il2cpp_set_default_thread_affinity": "VXtNXwGhYvR",
  "il2cpp_unity_set_android_network_up_state_func": "iKuYNeRFNlh"
};

Il2Cpp.$config.exports = {
	il2cpp_init: () => Il2Cpp.module.findExportByName("vzm_mkcAWoQ"),
	il2cpp_init_utf16: () => Il2Cpp.module.findExportByName("qjXlkxrRckE"),
	il2cpp_shutdown: () => Il2Cpp.module.findExportByName("uyeOLmpKDh_"),
	il2cpp_set_config_dir: () => Il2Cpp.module.findExportByName("RbunzyWwydy"),
	il2cpp_set_data_dir: () => Il2Cpp.module.findExportByName("qB_vBRoUWer"),
	il2cpp_set_temp_dir: () => Il2Cpp.module.findExportByName("DYcbuysvUMU"),
	il2cpp_set_commandline_arguments: () => Il2Cpp.module.findExportByName("HUWPrwKDHiB"),
	il2cpp_set_commandline_arguments_utf16: () => Il2Cpp.module.findExportByName("GajXUXkeRUB"),
	il2cpp_set_config_utf16: () => Il2Cpp.module.findExportByName("CzaFxvrepZL"),
	il2cpp_set_config: () => Il2Cpp.module.findExportByName("KyjXrrKGauH"),
	il2cpp_set_memory_callbacks: () => Il2Cpp.module.findExportByName("AlQeLfBwVqz"),
	il2cpp_memory_pool_set_region_size: () => Il2Cpp.module.findExportByName("mPNAuyjbKxU"),
	il2cpp_memory_pool_get_region_size: () => Il2Cpp.module.findExportByName("xJoNqWfLklo"),
	il2cpp_get_corlib: () => Il2Cpp.module.findExportByName("yfhoTCMsXwl"),
	il2cpp_add_internal_call: () => Il2Cpp.module.findExportByName("ITlNrZgFnzB"),
	il2cpp_resolve_icall: () => Il2Cpp.module.findExportByName("EdYmSzZDXON"),
	il2cpp_alloc: () => Il2Cpp.module.findExportByName("hPnKvrqqVkL"),
	il2cpp_free: () => Il2Cpp.module.findExportByName("esCigKpiIpS"),
	il2cpp_array_class_get: () => Il2Cpp.module.findExportByName("VsTlixHJy_s"),
	il2cpp_array_length: () => Il2Cpp.module.findExportByName("WDwonWtRtrM"),
	il2cpp_array_get_byte_length: () => Il2Cpp.module.findExportByName("e_SQWoFENnV"),
	il2cpp_array_new: () => Il2Cpp.module.findExportByName("WVgfgoKRBpX"),
	il2cpp_array_new_specific: () => Il2Cpp.module.findExportByName("ULFgBsURQPt"),
	il2cpp_array_new_full: () => Il2Cpp.module.findExportByName("KmXWKDqGiOp"),
	il2cpp_bounded_array_class_get: () => Il2Cpp.module.findExportByName("zWUnZilQdxc"),
	il2cpp_array_element_size: () => Il2Cpp.module.findExportByName("nsRgVMuG_RB"),
	il2cpp_assembly_get_image: () => Il2Cpp.module.findExportByName("PQYnvAePjFp"),
	il2cpp_class_for_each: () => Il2Cpp.module.findExportByName("rtVtdAmtxqF"),
	il2cpp_class_enum_basetype: () => Il2Cpp.module.findExportByName("CubPpmmx_Uy"),
	il2cpp_class_is_inited: () => Il2Cpp.module.findExportByName("q_jQDrd_TgJ"),
	il2cpp_class_is_generic: () => Il2Cpp.module.findExportByName("PsmuRVNBfxk"),
	il2cpp_class_is_inflated: () => Il2Cpp.module.findExportByName("zfBzLHwOWBP"),
	il2cpp_class_is_assignable_from: () => Il2Cpp.module.findExportByName("qbrhATmILQm"),
	il2cpp_class_is_subclass_of: () => Il2Cpp.module.findExportByName("yuyRtcTqPfW"),
	il2cpp_class_has_parent: () => Il2Cpp.module.findExportByName("lcUVZiFaDKY"),
	il2cpp_class_from_il2cpp_type: () => Il2Cpp.module.findExportByName("EYucBTiyXQW"),
	il2cpp_class_from_name: () => Il2Cpp.module.findExportByName("nZgHGzSKaXj"),
	il2cpp_class_from_system_type: () => Il2Cpp.module.findExportByName("AG_UaBzxuMC"),
	il2cpp_class_get_element_class: () => Il2Cpp.module.findExportByName("rJoAJIseZzC"),
	il2cpp_class_get_events: () => Il2Cpp.module.findExportByName("jWMnPiUodQm"),
	il2cpp_class_get_fields: () => Il2Cpp.module.findExportByName("dtvlgQqcjNG"),
	il2cpp_class_get_nested_types: () => Il2Cpp.module.findExportByName("HlAoHtjLlTr"),
	il2cpp_class_get_interfaces: () => Il2Cpp.module.findExportByName("MLmzBSbizjV"),
	il2cpp_class_get_properties: () => Il2Cpp.module.findExportByName("ZFWRYZtXFnO"),
	il2cpp_class_get_property_from_name: () => Il2Cpp.module.findExportByName("WTlQPVTkRhg"),
	il2cpp_class_get_field_from_name: () => Il2Cpp.module.findExportByName("XdxZkAFJBku"),
	il2cpp_class_get_methods: () => Il2Cpp.module.findExportByName("RmMtftShGhA"),
	il2cpp_class_get_method_from_name: () => Il2Cpp.module.findExportByName("nAQlcshGYBe"),
	il2cpp_class_get_name: () => Il2Cpp.module.findExportByName("mXqUuqWdWAm"),
	il2cpp_type_get_name_chunked: () => Il2Cpp.module.findExportByName("kzkwrxXzYok"),
	il2cpp_class_get_namespace: () => Il2Cpp.module.findExportByName("LnfOBdWy_zJ"),
	il2cpp_class_get_parent: () => Il2Cpp.module.findExportByName("iAQziMAXtkj"),
	il2cpp_class_get_declaring_type: () => Il2Cpp.module.findExportByName("ghzZgsgNylE"),
	il2cpp_class_instance_size: () => Il2Cpp.module.findExportByName("QprCHpcKETk"),
	il2cpp_class_num_fields: () => Il2Cpp.module.findExportByName("MixXFTcGZpM"),
	il2cpp_class_is_valuetype: () => Il2Cpp.module.findExportByName("nWdOdbfTzFu"),
	il2cpp_class_value_size: () => Il2Cpp.module.findExportByName("rgEmcUTLNUx"),
	il2cpp_class_is_blittable: () => Il2Cpp.module.findExportByName("Qf_WiQzqClZ"),
	il2cpp_class_get_flags: () => Il2Cpp.module.findExportByName("QdCVjZaYCbi"),
	il2cpp_class_is_abstract: () => Il2Cpp.module.findExportByName("BTmvtNMdOGJ"),
	il2cpp_class_is_interface: () => Il2Cpp.module.findExportByName("FIZaVdEKPrG"),
	il2cpp_class_array_element_size: () => Il2Cpp.module.findExportByName("NruGKyS_Yml"),
	il2cpp_class_from_type: () => Il2Cpp.module.findExportByName("AvzxYejfhhQ"),
	il2cpp_class_get_type: () => Il2Cpp.module.findExportByName("xu_JZflccgI"),
	il2cpp_class_get_type_token: () => Il2Cpp.module.findExportByName("yOqHQWQGtoh"),
	il2cpp_class_has_attribute: () => Il2Cpp.module.findExportByName("GldPBiwZcvq"),
	il2cpp_class_has_references: () => Il2Cpp.module.findExportByName("gMwjkNWnmxr"),
	il2cpp_class_is_enum: () => Il2Cpp.module.findExportByName("FWgQtGTdqSa"),
	il2cpp_class_get_image: () => Il2Cpp.module.findExportByName("VDLgHQbYQWE"),
	il2cpp_class_get_assemblyname: () => Il2Cpp.module.findExportByName("eQAuNLpVVvS"),
	il2cpp_class_get_rank: () => Il2Cpp.module.findExportByName("gVtdwEEbeZz"),
	il2cpp_class_get_data_size: () => Il2Cpp.module.findExportByName("mWJIiGyBFGN"),
	il2cpp_class_get_static_field_data: () => Il2Cpp.module.findExportByName("NpoQbYREaRC"),
	il2cpp_stats_dump_to_file: () => Il2Cpp.module.findExportByName("qYzYmbHcvgH"),
	il2cpp_stats_get_value: () => Il2Cpp.module.findExportByName("FsHznmrJ_Nv"),
	il2cpp_domain_get: () => Il2Cpp.module.findExportByName("snFEUyUDPjz"),
	il2cpp_domain_assembly_open: () => Il2Cpp.module.findExportByName("ZnlHWJKmqDF"),
	il2cpp_domain_get_assemblies: () => Il2Cpp.module.findExportByName("JZwhxGwe_Ug"),
	il2cpp_raise_exception: () => Il2Cpp.module.findExportByName("fKGCVnieTBq"),
	il2cpp_exception_from_name_msg: () => Il2Cpp.module.findExportByName("OUjmAjCWfBA"),
	il2cpp_get_exception_argument_null: () => Il2Cpp.module.findExportByName("kqjWTfzHjuM"),
	il2cpp_format_exception: () => Il2Cpp.module.findExportByName("giYhsWNuWzf"),
	il2cpp_format_stack_trace: () => Il2Cpp.module.findExportByName("KzBdiCmDXnQ"),
	il2cpp_unhandled_exception: () => Il2Cpp.module.findExportByName("sEATJ_eduhE"),
	il2cpp_native_stack_trace: () => Il2Cpp.module.findExportByName("BdcWHAyWcVj"),
	il2cpp_field_get_flags: () => Il2Cpp.module.findExportByName("fuOWmPzKNxR"),
	il2cpp_field_get_from_reflection: () => Il2Cpp.module.findExportByName("NcGudSwjsXY"),
	il2cpp_field_get_name: () => Il2Cpp.module.findExportByName("pSWcFhPbQIL"),
	il2cpp_field_get_parent: () => Il2Cpp.module.findExportByName("Sy_ygsJqIIc"),
	il2cpp_field_get_object: () => Il2Cpp.module.findExportByName("qhXRsepMZJg"),
	il2cpp_field_get_offset: () => Il2Cpp.module.findExportByName("zXczstGEUGx"),
	il2cpp_field_get_type: () => Il2Cpp.module.findExportByName("eVTXGCrANLy"),
	il2cpp_field_get_value: () => Il2Cpp.module.findExportByName("fPBsAPBfb_t"),
	il2cpp_field_get_value_object: () => Il2Cpp.module.findExportByName("KAWFRVpiZwN"),
	il2cpp_field_has_attribute: () => Il2Cpp.module.findExportByName("NlTRljTRzaa"),
	il2cpp_field_set_value: () => Il2Cpp.module.findExportByName("flNCSQPy_rM"),
	il2cpp_field_static_get_value: () => Il2Cpp.module.findExportByName("RmCTWZOZeeJ"),
	il2cpp_field_static_set_value: () => Il2Cpp.module.findExportByName("ByqvQWQwoom"),
	il2cpp_field_set_value_object: () => Il2Cpp.module.findExportByName("XKoHhGgkRhx"),
	il2cpp_field_is_literal: () => Il2Cpp.module.findExportByName("zRjCorfwfZO"),
	il2cpp_gc_collect: () => Il2Cpp.module.findExportByName("IreAuPt_vKZ"),
	il2cpp_gc_collect_a_little: () => Il2Cpp.module.findExportByName("mILVSJppKpU"),
	il2cpp_gc_start_incremental_collection: () => Il2Cpp.module.findExportByName("BvySLEraMwy"),
	il2cpp_gc_disable: () => Il2Cpp.module.findExportByName("axDfjWhWQQN"),
	il2cpp_gc_enable: () => Il2Cpp.module.findExportByName("LFPlgGEMplW"),
	il2cpp_gc_is_disabled: () => Il2Cpp.module.findExportByName("wAvuhMS_VFJ"),
	il2cpp_gc_set_mode: () => Il2Cpp.module.findExportByName("vZtCmtrkUkA"),
	il2cpp_gc_get_max_time_slice_ns: () => Il2Cpp.module.findExportByName("ASubvCQPqkx"),
	il2cpp_gc_set_max_time_slice_ns: () => Il2Cpp.module.findExportByName("UICDiZljIVX"),
	il2cpp_gc_is_incremental: () => Il2Cpp.module.findExportByName("jVQRDXtfGCP"),
	il2cpp_gc_get_used_size: () => Il2Cpp.module.findExportByName("rtOcYmTykMY"),
	il2cpp_gc_get_heap_size: () => Il2Cpp.module.findExportByName("AhSaKRPyfXo"),
	il2cpp_gc_wbarrier_set_field: () => Il2Cpp.module.findExportByName("nNEbrwsZFBP"),
	il2cpp_gc_has_strict_wbarriers: () => Il2Cpp.module.findExportByName("OrpqzXlGlIG"),
	il2cpp_gc_set_external_allocation_tracker: () => Il2Cpp.module.findExportByName("jgHLCJEMDUS"),
	il2cpp_gc_set_external_wbarrier_tracker: () => Il2Cpp.module.findExportByName("N_DJUXFlzsP"),
	il2cpp_gc_foreach_heap: () => Il2Cpp.module.findExportByName("rmqEluXeIwv"),
	il2cpp_stop_gc_world: () => Il2Cpp.module.findExportByName("GUHlZaQQLtL"),
	il2cpp_start_gc_world: () => Il2Cpp.module.findExportByName("PMcAsFWpZAe"),
	il2cpp_gc_alloc_fixed: () => Il2Cpp.module.findExportByName("TOnqwMiEJCb"),
	il2cpp_gc_free_fixed: () => Il2Cpp.module.findExportByName("VdmduNKqzcn"),
	il2cpp_gchandle_new: () => Il2Cpp.module.findExportByName("GKVNovdfUHe"),
	il2cpp_gchandle_new_weakref: () => Il2Cpp.module.findExportByName("sDYZLWhdjsd"),
	il2cpp_gchandle_get_target: () => Il2Cpp.module.findExportByName("RdqaQpJHGmE"),
	il2cpp_gchandle_free: () => Il2Cpp.module.findExportByName("_UsVjAlUEwg"),
	il2cpp_gchandle_foreach_get_target: () => Il2Cpp.module.findExportByName("gyErIIhAsNx"),
	il2cpp_object_header_size: () => Il2Cpp.module.findExportByName("nRwIEMEsMfk"),
	il2cpp_array_object_header_size: () => Il2Cpp.module.findExportByName("FRWqIWOaAQB"),
	il2cpp_offset_of_array_length_in_array_object_header: () => Il2Cpp.module.findExportByName("BIWWruvgYrg"),
	il2cpp_offset_of_array_bounds_in_array_object_header: () => Il2Cpp.module.findExportByName("UAtMjOxTHEQ"),
	il2cpp_allocation_granularity: () => Il2Cpp.module.findExportByName("f_LVLDYyveN"),
	il2cpp_unity_liveness_allocate_struct: () => Il2Cpp.module.findExportByName("xIDytamUcFX"),
	il2cpp_unity_liveness_calculation_from_root: () => Il2Cpp.module.findExportByName("fATMSIjRpIX"),
	il2cpp_unity_liveness_calculation_from_statics: () => Il2Cpp.module.findExportByName("BmQBCTfebcF"),
	il2cpp_unity_liveness_finalize: () => Il2Cpp.module.findExportByName("EAWHcpAfoyS"),
	il2cpp_unity_liveness_free_struct: () => Il2Cpp.module.findExportByName("AtuxcKTCfhz"),
	il2cpp_method_get_return_type: () => Il2Cpp.module.findExportByName("OjOGYWjZp_C"),
	il2cpp_method_get_declaring_type: () => Il2Cpp.module.findExportByName("QTLairwpkqu"),
	il2cpp_method_get_name: () => Il2Cpp.module.findExportByName("WYvkJwpAxft"),
	il2cpp_method_get_from_reflection: () => Il2Cpp.module.findExportByName("UrscdEqfGjx"),
	il2cpp_method_get_object: () => Il2Cpp.module.findExportByName("pMheyQqMqno"),
	il2cpp_method_is_generic: () => Il2Cpp.module.findExportByName("JvnHcOfmvEj"),
	il2cpp_method_is_inflated: () => Il2Cpp.module.findExportByName("gVyvgNqMnRF"),
	il2cpp_method_is_instance: () => Il2Cpp.module.findExportByName("qpC_MNtViNk"),
	il2cpp_method_get_param_count: () => Il2Cpp.module.findExportByName("xPlRRbWNqrt"),
	il2cpp_method_get_param: () => Il2Cpp.module.findExportByName("skEFeRDFzUj"),
	il2cpp_method_get_class: () => Il2Cpp.module.findExportByName("FnkADtgntFR"),
	il2cpp_method_has_attribute: () => Il2Cpp.module.findExportByName("QDlbEpWsJZv"),
	il2cpp_method_get_flags: () => Il2Cpp.module.findExportByName("QxMFHVaNXNK"),
	il2cpp_method_get_token: () => Il2Cpp.module.findExportByName("ECEgqhfAkuH"),
	il2cpp_method_get_param_name: () => Il2Cpp.module.findExportByName("XzqklIdzUCA"),
	il2cpp_property_get_flags: () => Il2Cpp.module.findExportByName("pfqHpVBZNjO"),
	il2cpp_property_get_get_method: () => Il2Cpp.module.findExportByName("MS_KwjHDYhY"),
	il2cpp_property_get_set_method: () => Il2Cpp.module.findExportByName("BPwwpxtaMQr"),
	il2cpp_property_get_name: () => Il2Cpp.module.findExportByName("JgVfoaxPikv"),
	il2cpp_property_get_parent: () => Il2Cpp.module.findExportByName("shBiGaAtdji"),
	il2cpp_object_get_class: () => Il2Cpp.module.findExportByName("YijXdtarReX"),
	il2cpp_object_get_size: () => Il2Cpp.module.findExportByName("ZMGTHUUqKQX"),
	il2cpp_object_get_virtual_method: () => Il2Cpp.module.findExportByName("JyrYKzUXeFZ"),
	il2cpp_object_new: () => Il2Cpp.module.findExportByName("lVKrYODTixs"),
	il2cpp_object_unbox: () => Il2Cpp.module.findExportByName("FMoKleIUwkN"),
	il2cpp_value_box: () => Il2Cpp.module.findExportByName("_xlNuxRpCqd"),
	il2cpp_monitor_enter: () => Il2Cpp.module.findExportByName("aAqqrkTgbGH"),
	il2cpp_monitor_try_enter: () => Il2Cpp.module.findExportByName("xCAAQWvuzmk"),
	il2cpp_monitor_exit: () => Il2Cpp.module.findExportByName("kBVjhzDlyUK"),
	il2cpp_monitor_pulse: () => Il2Cpp.module.findExportByName("qrLXsuyQhbp"),
	il2cpp_monitor_pulse_all: () => Il2Cpp.module.findExportByName("qIdQwixRcwr"),
	il2cpp_monitor_wait: () => Il2Cpp.module.findExportByName("Ojx_IAuMSYL"),
	il2cpp_monitor_try_wait: () => Il2Cpp.module.findExportByName("UNDDI_smyPN"),
	il2cpp_runtime_invoke: () => Il2Cpp.module.findExportByName("XgaiMjbESoF"),
	il2cpp_runtime_invoke_convert_args: () => Il2Cpp.module.findExportByName("WWa_cJtdpzI"),
	il2cpp_runtime_class_init: () => Il2Cpp.module.findExportByName("CcbQSQYzbIn"),
	il2cpp_runtime_object_init: () => Il2Cpp.module.findExportByName("aCreUIMFuui"),
	il2cpp_runtime_object_init_exception: () => Il2Cpp.module.findExportByName("RhTPBMZzWGB"),
	il2cpp_runtime_unhandled_exception_policy_set: () => Il2Cpp.module.findExportByName("gILZtgN_GAq"),
	il2cpp_string_length: () => Il2Cpp.module.findExportByName("TLqWNjtNbrk"),
	il2cpp_string_chars: () => Il2Cpp.module.findExportByName("QmIDYaGOOSu"),
	il2cpp_string_new: () => Il2Cpp.module.findExportByName("zm_TnaWUthA"),
	il2cpp_string_new_len: () => Il2Cpp.module.findExportByName("EAyljOksjgM"),
	il2cpp_string_new_utf16: () => Il2Cpp.module.findExportByName("UGLcZh_XTdZ"),
	il2cpp_string_new_wrapper: () => Il2Cpp.module.findExportByName("zHAswHeRiRf"),
	il2cpp_string_intern: () => Il2Cpp.module.findExportByName("YpctUjPfL_R"),
	il2cpp_string_is_interned: () => Il2Cpp.module.findExportByName("tWENFdgnxth"),
	il2cpp_thread_current: () => Il2Cpp.module.findExportByName("qOLvlGzPzrp"),
	il2cpp_thread_attach: () => Il2Cpp.module.findExportByName("ydayGqzrVvQ"),
	il2cpp_thread_detach: () => Il2Cpp.module.findExportByName("zsnwoocRqEW"),
	il2cpp_is_vm_thread: () => Il2Cpp.module.findExportByName("FuiPBqQdCzM"),
	il2cpp_current_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("jgriLtbYcWS"),
	il2cpp_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("NzFPHTSmGnt"),
	il2cpp_current_thread_get_top_frame: () => Il2Cpp.module.findExportByName("nHZnhFRvXUM"),
	il2cpp_thread_get_top_frame: () => Il2Cpp.module.findExportByName("JZVUeBansGU"),
	il2cpp_current_thread_get_frame_at: () => Il2Cpp.module.findExportByName("LuXDyXbfois"),
	il2cpp_thread_get_frame_at: () => Il2Cpp.module.findExportByName("HETJqMKFsLH"),
	il2cpp_current_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("ZICBpBlMbDP"),
	il2cpp_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("_RHnkLyONMN"),
	il2cpp_override_stack_backtrace: () => Il2Cpp.module.findExportByName("lUWJOzvMaIu"),
	il2cpp_type_get_object: () => Il2Cpp.module.findExportByName("rODmyWINvSc"),
	il2cpp_type_get_type: () => Il2Cpp.module.findExportByName("IOSCNDZaajO"),
	il2cpp_type_get_class_or_element_class: () => Il2Cpp.module.findExportByName("XyiAXiiJBZU"),
	il2cpp_type_get_name: () => Il2Cpp.module.findExportByName("ILvjLMuuOkT"),
	il2cpp_type_is_byref: () => Il2Cpp.module.findExportByName("nl_TPZtbqTe"),
	il2cpp_type_get_attrs: () => Il2Cpp.module.findExportByName("LbazMPKrgTd"),
	il2cpp_type_equals: () => Il2Cpp.module.findExportByName("pwrQPvKzM_I"),
	il2cpp_type_get_assembly_qualified_name: () => Il2Cpp.module.findExportByName("IwtiU_AwFOY"),
	il2cpp_type_get_reflection_name: () => Il2Cpp.module.findExportByName("IARiGLbekhN"),
	il2cpp_type_is_static: () => Il2Cpp.module.findExportByName("VMxOkCPfYTv"),
	il2cpp_type_is_pointer_type: () => Il2Cpp.module.findExportByName("nKPkKye_SjN"),
	il2cpp_image_get_assembly: () => Il2Cpp.module.findExportByName("TommXUDRwzZ"),
	il2cpp_image_get_name: () => Il2Cpp.module.findExportByName("XsqNxTWoJFJ"),
	il2cpp_image_get_filename: () => Il2Cpp.module.findExportByName("mQfAAlTaabT"),
	il2cpp_image_get_entry_point: () => Il2Cpp.module.findExportByName("FEITiSQddfj"),
	il2cpp_image_get_class_count: () => Il2Cpp.module.findExportByName("AUsKFiZQ_Gm"),
	il2cpp_image_get_class: () => Il2Cpp.module.findExportByName("TJaQpyAyaVJ"),
	il2cpp_capture_memory_snapshot: () => Il2Cpp.module.findExportByName("LozSuZLIegf"),
	il2cpp_free_captured_memory_snapshot: () => Il2Cpp.module.findExportByName("iMgkGgaTXfm"),
	il2cpp_set_find_plugin_callback: () => Il2Cpp.module.findExportByName("HjdZCltTHWs"),
	il2cpp_register_log_callback: () => Il2Cpp.module.findExportByName("bOsGYTQAeMw"),
	il2cpp_debugger_set_agent_options: () => Il2Cpp.module.findExportByName("GbKgERSaxdF"),
	il2cpp_is_debugger_attached: () => Il2Cpp.module.findExportByName("UqqbIqJCqsM"),
	il2cpp_register_debugger_agent_transport: () => Il2Cpp.module.findExportByName("EWAXPTKl_Cs"),
	il2cpp_debug_foreach_method: () => Il2Cpp.module.findExportByName("QbruJetUihF"),
	il2cpp_debug_get_method_info: () => Il2Cpp.module.findExportByName("YnBwIibmLIX"),
	il2cpp_unity_install_unitytls_interface: () => Il2Cpp.module.findExportByName("dCuYEerILHF"),
	il2cpp_custom_attrs_from_class: () => Il2Cpp.module.findExportByName("eNnBMqcilAN"),
	il2cpp_custom_attrs_from_method: () => Il2Cpp.module.findExportByName("zbKCWGlICnb"),
	il2cpp_custom_attrs_from_field: () => Il2Cpp.module.findExportByName("KoVJcfpcCnO"),
	il2cpp_custom_attrs_get_attr: () => Il2Cpp.module.findExportByName("UvbgzjHVOUW"),
	il2cpp_custom_attrs_has_attr: () => Il2Cpp.module.findExportByName("UHZlYgDwMfO"),
	il2cpp_custom_attrs_construct: () => Il2Cpp.module.findExportByName("CbMzOojQkoh"),
	il2cpp_custom_attrs_free: () => Il2Cpp.module.findExportByName("HLPgjzkUxpL"),
	il2cpp_class_set_userdata: () => Il2Cpp.module.findExportByName("eVrpEgPKmgO"),
	il2cpp_class_get_userdata_offset: () => Il2Cpp.module.findExportByName("pOjJ_tTBLxc"),
	il2cpp_set_default_thread_affinity: () => Il2Cpp.module.findExportByName("VXtNXwGhYvR"),
	il2cpp_unity_set_android_network_up_state_func: () => Il2Cpp.module.findExportByName("iKuYNeRFNlh"),
};
const version = "1.3.0";
let boardMaterial = null;
let buttonClickDelay = 0.0;
let menu = null;
let reference = null;
let referenceCollider = null;

let goopFishGunEnabled = false;
let goopFishDelay = 0;

let leftPrimary = false;
let leftSecondary = false;
let rightPrimary = false;
let rightSecondary = false;
let leftGrab = false;
let rightGrab = false;
let leftTrigger = false;
let rightTrigger = false;
let leftStick = false;
let rightStick = false;

let mobGunEnabled = false;
let prefabGunEnabled = false;
let spawnGunEnabled = false;
let lastGunTime = 0;

// Toggleable feature flags
let stashDupeEnabled = false;
let backpackDupeEnabled = false;
let stashAllowMoves = false;
let stashQOLFix = false;
let allowPutGBO = false;
let arenaItemKillerDisabled = false;
let antiKickEnabled = true;
let antiTeleportEnabled = true;
let antiBlindEnabled = false;
let antiColorEnabled = false;
let antiForceEnabled = false;
let antiScaleEnabled = false;
let antiVoidEnabled = false;
let frozenPlayers: Map<any, any> = new Map();
let antiFlyTargets: Map<any, any> = new Map();
let antiFlyGunEnabled = false;
let antiOrbitGunEnabled = false;
let antiOrbitTargets: Map<any, any> = new Map();
let crashGunEnabled = false;
let deletePrefabGunEnabled = false;
let roomLockEnabled = false;
let whitelist: string[] = [];
let whitelistEnabled = true;
let wlFlyEnabled = false;
let wlRocketEnabled = false;
let wlFlareEnabled = false;
let wlCarEnabled = false;
let wlCrateEnabled = false;
let wlSuitcaseEnabled = false;
let wlBombEnabled = false;
let wlEggEnabled = false;
let wlBalloonEnabled = false;
let wlGiveawayEnabled = false;
let wlDisintegrateEnabled = false;
let wlGunBuffEnabled = false;
let wlSpazRainbowEnabled = false;
let wlTarget: any = null;
let wlLastGunTime = 0;

let followedPrefabObject: any = null;
let followedPrefabName: string = "";

let trapGunEnabled = false;

let orbitprefabs: any[] = [];

let rocketFistEnabled = false;
let boomspearFistEnabled = false;
let eggFistEnabled = false;
let dogFistEnabled = false;
let lastFistTime = 0;

// Weapon mod toggles
let infAmmoJetpack = false;
let infAmmoFlare = false;
let infAmmoZipline = false;
let infAmmoRevolver = false;
let infAmmoArena = false;
let infAmmoShotgun = false;
let infAmmoRPG = false;
let giveawayBagSpammerEnabled = false;
let giveawayBagSpammerDelay = 0;
let moneyBagSpammerEnabled = false;
let moneyBagSpammerDelay = 0;
let giveawayBagGunEnabled = false;
let giveawayBagGunDelay = 0;
let moneyBagGunEnabled = false;
let moneyBagGunDelay = 0;
let spawnMobEnabled = false;
let spawnMobGunEnabled = false;
let mobSpawnDelay = 0;

let kamehamehaEnabled = false;
let lastKameTime = 0;

let ramEventNetGunEnabled = false;
let ramEventNetGunDelay = 0;

let inPlayerSubMenu = false;

let chainEnabled = false;
let chainObjects: any[] = [];
const CHAIN_LENGTH = 10;
const CHAIN_SPACING = 0.35;

let domeEnabled = false;
let domeObjects: any[] = [];

let randomItemSpawnerEnabled = false;
let randomItemGunEnabled = false;
let randomizeAllItemsEnabled = false;
let lastRandomItemTime = 0;
let godModeV2Enabled = false;
let sellingMachineGunEnabled = false;
let christmasBoxGunEnabled = false;
let deleteItemGunEnabled = false;
let dropItemGunEnabled = false;
let lastTriggerState = false;
let itemLauncherEnabled = false;
let itemLauncherDelay = 0;
let itemLauncherSelfDelay = 0;
let floatingMachineEnabled = false;
let floatingMachine: any = null;
let floatingMachineState = "up";
let floatingMachinePauseTimer = 0;
let floatingMachineRotation = 0;
let floatingChristmasEnabled = false;
let telekinesisGunEnabled = false;
let telekinesisTarget: any = null;
let floatingChristmas: any = null;
let floatingChristmasState = "up";
let floatingChristmasPauseTimer = 0;
let floatingChristmasRotation = 0;
let mobSpawnerGunEnabled = false;
let mobSpawnerGunDelay = 0;
let selectedMobForGun = 0;
let lastRocketTime = 0;
let lastBoomspearTime = 0;
let lastEggTime = 0;
let soundWaveMode = false;
let soundWaveTime = 0;
let getPlayerIDGunEnabled = false;
let getPlayerIDGunDelay = 0;
let inPlayerMenu = false;
let arrowLauncherEnabled = false;
let arrowLauncherDelay = 0;
let bombArrowLauncherEnabled = false;
let bombArrowLauncherDelay = 0;
let fistFlyVelocity: [number, number, number] = [0, 0, 0];
let joystickFlyVelocity: [number, number, number] = [0, 0, 0];

let trailEnabled = false;
let trailObjects: any[] = [];
let trailPositions: { x: number, y: number, z: number }[] = [];
const TRAIL_LENGTH = 15;
const TRAIL_SPACING = 0.35;

let hueValue = 0;
let satValue = 0;
let scaleValue = 0;
let randomizeOnSpawn = false;
let gridSize = 4;
let flyTriggerEnabled = false;
let flySpeed = 10.0;

let spazRainbowEnabled = false;



let playerList: any[] = [];
let selectedPlayer: any = null;
let selectedPlayerName: string = "";
let showPlayerOptions = false;
let playerPositions: Map<string, any> = new Map();
let updateTimer = 0;
let dysonSphereEnabled = false;
let dysonSphereRings: any[] = [[], []];
let dysonSphereRingAngles: number[] = [0, 0];
let dysonSphereRingTilt: number = 0;
let dysonSphereTiltDirection: number = 1;
let ramEventNetSpammerEnabled = false;
let ramEventNetDelay = 0;
let rainbowItemSpawnerEnabled = false;
let rainbowItemSpawnerDelay = 0;
// Movement toggles
let flyEnabled = false;
let platformsEnabled = false;
let noclipEnabled = false;
let flySpeedIndex = 1;
let flySpeeds = [10, 25, 60, 150];
let longArmsLevel = 0;
let superJumpEnabled = false;
let dashEnabled = false;
let airControlEnabled = false;
let wallClimbEnabled = false;
let freezeSelfEnabled = false;
let speedBoostEnabled = false;
let speedMultiplier = 1;
let customGravityValue = -9.81;
let customGravityEnabled = false;

let spiralEnabled = false;
let spiralObjects: any[] = [];
let spiralAngle = 0;
let spiralHeight = 0;
let hundredItemGunEnabled = false;
let hundredItemGunDelay = 0;
let spiralChristmasEnabled = false;
let spiralChristmasObjects: any[] = [];
let spiralChristmasAngle = 0;
let spiralChristmasHeight = 0;
let rainbowRandomLauncherEnabled = false;
let rainbowRandomLauncherDelay = 0;
let deltaTime = 0.0;
let time = 0.0;
let frameCount = 0;

let thunderEnabled = false;
let thunderObject: any = null;

let buttonSound = 44;
let LerpMenu = false;
let menuscale = 0.9;

let leftPlatform = null;
let rightPlatform = null;

let sizeGunBigEnabled = false;
let sizeGunSmallEnabled = false;
let lastSizeGunTime = 0;

let flingGunEnabled = false;
let kickGunEnabled = false;
let teleportGunEnabled = false;
let colorGunEnabled = false;
let spazColorGunEnabled = false;
let selectedTeleportLocation = 0;
const teleportLocations = [
    "Lake",
    "Moon",
    "Sewers",
    "Spawn",
    "Water Tower",
    "Skybox",
    "Void"
];
const teleportCoords = [
    [-213.170, 56.764, -15.242],
    [1021.538, 980.105, 1054.145],
    [88.541, -103.024, 140.867],
    [-397.684, 2.135, -399.209],
    [49.446, 50.186, -33.340],
    [0, 500, 0],
    [0, -9999999, 0]
];

let randomItemSpammerEnabled = false;
let lastRandomSpawnTime = 0;
let antiKickBlockCount = 0;

let orbiters: any[] = [];
let orbitPrefabs: any[] = [];
let orbitEnabled: boolean = false;
let orbitUpdateRunning: boolean = false;
let playerOrbitEnabled: boolean = false;
let playerOrbiters: any[] = [];

let lastSpawnTime = 0;

let jailGunEnabled = false;
let jailGunDelay = 0;

let audioManager = null;
let visualizer: any[] = [];

let giantChristmas: any = null;
let giantChristmasEnabled = false;
let giantChristmasSize = 3.0;

let giantMachine: any = null;
let giantMachineEnabled = false;
let giantMachineSize = 3.0;

let tpLakeEnabled = false;
let tpMoonEnabled = false;
let tpSewersEnabled = false;
let tpSpawnEnabled = false;
let tpWaterTowerEnabled = false;
let tpSkyboxEnabled = false;
let tpVoidEnabled = false;

let handTextObj = null;
let buttonNotifications: boolean = true;

let bgColor: [number, number, number, number] = [2.0, 2.5, 2.0, 1.0];
let textColor: [number, number, number, number] = [1.0, 0.7450981, 0.4901961, 1.0];
let buttonColor: [number, number, number, number] = [0.666, 0.333, 0.0, 1.0];
let buttonPressedColor: [number, number, number, number] = [0.333, 0.150, 0.0, 1.0];


let menuName: string = "Believes <b>Skidded</b> Menu BETA <b>v1.1</b>";
let themeIndex = 0;
let buttonIndex = 0

let spawnBalloonEnabled = false;
let spawnHeartBalloonEnabled = false;
let spawnDelay = 0;;

let currentNotification: string = "";
let notifactionResetTime: number = 0;

let spamRainbowAllEnabled = false;

let tagGunDelay = 0.0;
let perviousSpawnKey = false;
let itemGunDelay = 0.0;
let GunPointer = null;
let GunLine = null;

const itemIDs = [
    "item_ac_cola","item_alphablade","item_rare_trading_card","item_anti_gravity_grenade","item_apple","item_arena_pistol",
    "item_arena_shotgun","item_arrow","item_arrow_bomb","item_arrow_heart","item_axe",
    "item_backpack","item_backpack_black","item_backpack_green","item_backpack_large_base",
    "item_balloon","item_banana","item_baseball_bat","item_basic_fishing_rod","item_beans",
    "item_big_cup","item_bloodlust_vial","item_boombox","item_boomerang","item_box_fan",
    "item_broccoli_grenade","item_broom","item_bubble_gun","item_burrito","item_butcherpipe",
    "item_butcherspear","item_butchersword","item_calculator","item_cardboard_box",
    "item_chakra","item_cluster_grenade","item_cola","item_cola_large","item_company_ration",
    "item_crossbow","item_crowbar","item_d20","item_demon_sword","item_disc",
    "item_disposable_camera","item_drill","item_dynamite","item_egg","item_eraser",
    "item_finger_board","item_fish_boomfish","item_fish_boot","item_fish_carp",
    "item_fish_gold_fish","item_fish_rainbow_trout","item_fish_salmon","item_fish_tuna",
    "item_flamethrower","item_flaregun","item_flashbang","item_flashlight","item_football",
    "item_friend_launcher","item_frying_pan","item_gameboy","item_glowstick","item_goldbar",
    "item_goldcoin","item_goop","item_great_sword","item_grenade","item_grenade_gold",
    "item_grenade_launcher","item_guided_boomerang","item_hammer_candy_cane","item_hatchet",
    "item_heart_gun","item_hookshot","item_hoverpad","item_impulse_grenade","item_jetpack",
    "item_joystick","item_keycard","item_lance","item_landmine","item_large_banana",
    "item_love_grenade","item_megaphone","item_metal_ball","item_metal_plate","item_metal_rod",
    "item_moneygun","item_mug","item_needle","item_nut","item_ogre_hands",
    "item_pickaxe","item_pinata_bat","item_pineapple","item_pipe","item_pistol_dragon",
    "item_plank","item_pelican_case", "item_plunger","item_pogostick","item_police_baton","item_popcorn",
    "item_portable_teleporter","item_pumpkin_bomb","item_revolver","item_revolver_gold",
    "item_ring_buoy","item_rope","item_rpg","item_rpg_cny","item_rpg_easter",
    "item_rubberducky","item_ruby","item_saddle","item_salmoncannon","item_sawblade",
    "item_sawblade_launcher","item_scissors","item_shield","item_shotgun","item_shovel",
    "item_shredder","item_skipole","item_snowball","item_snowboard","item_spear_candy_cane",
    "item_stapler","item_stash_grenade","item_steel_beam","item_stellarsword_blue",
    "item_stellarsword_gold","item_stick_bone","item_sticker_dispenser","item_sticky_dynamite",
    "item_stinky_cheese","item_tablet","item_tapedispenser","item_tele_grenade",
    "item_tele_pearl","item_teleport_gun","item_theremin","item_timebomb","item_toilet_paper",
    "item_trampoline","item_treestick","item_tripwire_explosive","item_trophy","item_truss",
    "item_turkey_leg","item_turkey_whole","item_ukulele","item_umbrella","item_unidentified",
    "item_uranium_chunk_l","item_uranium_chunk_m","item_uranium_chunk_s","item_viking_hammer",
    "item_war_fan","item_wheelhandle","item_whoopie","item_wood_log","item_wood_pallet",
    "item_wyrmpiercer","item_zipline_gun","item_zombie_meat"
];

let itemIndex = 0;

const mobIDs: { name: string; id: number }[] = [
    { name: "Angler",              id: 1  },
    { name: "AnglerMad",           id: 2  },
    { name: "Armstrong",           id: 3  },
    { name: "ArmstrongMad",        id: 4  },
    { name: "Banshee",             id: 5  },
    { name: "Bomb",                id: 6  },
    { name: "Bomber",              id: 7  },
    { name: "BomberFlashbang",     id: 8  },
    { name: "BomberMad",           id: 9  },
    { name: "Chicken",             id: 10 },
    { name: "Cyst",                id: 11 },
    { name: "FakeGorilla",         id: 12 },
    { name: "BigHead",             id: 13 },
    { name: "RedGreen",            id: 14 },
    { name: "Phantom",             id: 15 },
    { name: "EvilEye",             id: 16 },
    { name: "GiantThrower",        id: 17 },
    { name: "RedGreenMad",         id: 18 },
    { name: "Spider",              id: 19 },
    { name: "FlyingSwarm",         id: 20 },
    { name: "NextBot",             id: 21 },
    { name: "Segway",              id: 22 },
    { name: "NextBotStatic",       id: 23 },
    { name: "EvilEyePinata",       id: 24 },
    { name: "EvilEyePinataLarge",  id: 25 },
    { name: "Lanky",               id: 26 },
    { name: "Blob",                id: 27 },
    { name: "Cutie",               id: 28 },
    { name: "SpiderCave",          id: 29 },
    { name: "ForestMob",           id: 30 },
    { name: "Mimic",               id: 31 },
    { name: "GraveyardBoss",       id: 32 },
    { name: "Ringmaster",          id: 33 },
    { name: "Puppet",              id: 34 },
    { name: "PolypMass",           id: 35 },
    { name: "RobotDog",            id: 36 },
    { name: "Shadow",              id: 37 },
    { name: "Heart",               id: 38 },
    { name: "Slimey",              id: 39 },
    { name: "ShadowBoss",          id: 40 },
    { name: "BigShark",            id: 41 },
    { name: "EdenZombie",          id: 42 },
    { name: "Skinwalker",          id: 43 },
];

const prefabList = [
    "Shipwheel",
    "TeleportMachine",
    "FourLeafQuest_FourLeafSpawner",
    "EasterEgg_QuestSpawner",
    "RadarPartSpawner",
    "SimpleKeypadDoor",
    "GiantController_GraveyardBoss_backup",
    "MetaCameraControls",
    "GrenadeProjectile",
    "LaserMirror",
    "TeleportMachine",
    "mom_pillow",
    "RiggedPlank",
    "SharkScareTriggerObject",
    "Uvula",
    "BaitShopButton_Spawner",
    "NetworkedLever_SecretLeft",
    "CoreTeleporter",
    "LaserSource",
    "LaserSink",
    "grababble_fish_paper_message",
    "AutoDestroyItem_OilSplatter",
    "AutoDestroyItem_Splash0",
    "AutoDestroyItem_Splash1",
    "AutoDestroyItem_Splash2",
    "AutoDestroyItem_Splash3",
    "AutoDestroyItem_Splash4",
    "AutoDestroyItem_Splash5",
    "BarrelBeansDynamic",
    "BarrelBeansStatic",
    "BarrelExplodingDynamic",
    "BarrelExplodingStatic",
    "BarrelOilDynamic",
    "BarrelOilStatic",
    "Basketball",
    "BigBanana",
    "BigHatchdoorNetObject",
    "BigWheelhandleSpawner",
    "BonfireController",
    "BrainPowerPlug",
    "ChoppableTreeManager",
    "ChristmasBox",
    "ChristmasBoxManager",
    "ClawMachineNetObject",
    "DiggableGrave",
    "DummyPlayerTarget",
    "DummyTarget",
    "Duplicator",
    "EscherToyBlockObject",
    "ExplosiveEgg",
    "ExplosiveEggClustered",
    "FlareGunProjectile",
    "FortuneTellerNet",
    "FuelCanisterNetObject",
    "FuelCanisterSpawner",
    "GenericWorldItemSpawner",
    "GiantRockObject",
    "GiantRockObject_Fire",
    "GreenscreenNET",
    "HatchdoorGrabHandle",
    "HatchdoorNetObject",
    "HellAltar",
    "HH_LockedDoor",
    "HingedDoorNetworked",
    "HordeMobController",
    "HordeMobLobbyHandler",
    "InflatedBalloon",
    "InflatedHeartBalloon",
    "ItemSellingMachineController",
    "KeypadDoorNetObject",
    "LakePineapple_Spawner",
    "Landmine",
    "LeaderBoardMonsterKill",
    "LockedDoor_KeySpawner",
    "LockedShippingContainer_Quest",
    "LogQuestItemSpawner",
    "LootLantern",
    "Mausoleum_01",
    "MazeManager",
    "MimicSpawner_CemeteryTile1",
    "MimicSpawner_CemeteryTile3",
    "MomToyBlockObject",
    "MomToyBlockObject_DisappearOnDrop",
    "MountainKey_Spawner",
    "MovieTheater",
    "Net",
    "NetGameTimeManager",
    "NetLootSpawnGroup",
    "NetMobSpawnGroup",
    "NetPlayer",
    "Pillar_Arched_Broken_01",
    "RamEventNet",
    "remote_controller_receiver",
    "RobotDogRPG",
    "RPGRocket",
    "RPGRocketEgg",
    "RPGRocketSpear",
    "RuinTower_FloatingPlatform",
    "RuinTower_FloatingSmall",
    "ScaffoldTrap",
    "SkiRaceController",
    "Snail_Spawner",
    "SpaceshipTeleporter",
    "SpawnableZipline",
    "Spawner_Key",
    "StickyAnchor",
    "TeleportationManager",
    "ThunderController",
    "TubeMonster",
    "Vehicle_Buggy",
    "VHSQuests_VHSSpawner",
    "WinterFilm_ReelSpawner",
];
let mobIndex = 0;
let mobGunDelay = 0.0;
let prefabIndex = 0; 


Il2Cpp.perform(() => {
    const images = {
        "AnimalCompany": Il2Cpp.domain.assembly("AnimalCompany").image,
        "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,
        "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image,
        "UnityEngine.UIModule": Il2Cpp.domain.assembly("UnityEngine.UIModule").image,
        "UnityEngine.UI": Il2Cpp.domain.assembly("UnityEngine.UI").image,
        "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly("UnityEngine.TextRenderingModule").image,
        "PhotonFusionNetworking": Il2Cpp.domain.assembly("Fusion.Runtime").image,
        "PhotonFusionNetworkingRealtime": Il2Cpp.domain.assembly("Fusion.Realtime").image,
        "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
        "UnityEngine.XRModule": Il2Cpp.domain.assembly("UnityEngine.XRModule").image,
        "UnityEngine.UnityWebRequestModule": Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image,
        "UnityEngine.AudioModule": Il2Cpp.domain.assembly("UnityEngine.AudioModule").image
    };

    const AssemblyCSharp = images["AnimalCompany"];
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const UnityEngineUI = images["UnityEngine.UI"];
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    const PhotonFusionNetworking = images["PhotonFusionNetworking"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineAudio = images["UnityEngine.AudioModule"];

    const GTPlayerClass = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion");
    const PCClass = AssemblyCSharp.class("AnimalCompany.PlayerController");
    const NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    const GBIClass = AssemblyCSharp.class("AnimalCompany.GrabbableItem");
    const PrefabGen = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
    const SFXManager = AssemblyCSharp.class("AnimalCompany.SFXManager");
    const ParticleManagerClass = AssemblyCSharp.class("AnimalCompany.ParticleManager");
    const NetworkObjectClass = PhotonFusionNetworking.class("Fusion.NetworkObject");
    const NManager = AssemblyCSharp.class("AnimalCompany.NetworkManager");
    const GorillaReportButton = AssemblyCSharp.class("AnimalCompany.ComputerTerminalKey");
    const InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices");
    const CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages");

    const GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    const Object = UnityEngineCore.class("UnityEngine.Object");
    const Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    const Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    const Time = UnityEngineCore.class("UnityEngine.Time");
    const Resources = UnityEngineCore.class("UnityEngine.Resources");
    const Material = UnityEngineCore.class("UnityEngine.Material");
    const Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    const Shader = UnityEngineCore.class("UnityEngine.Shader");
    const Color = UnityEngineCore.class("UnityEngine.Color");
    const RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    const LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    const PlayerPrefs = UnityEngineCore.class("UnityEngine.PlayerPrefs");
    const GBOClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject");
    const Light = UnityEngineCore.class("UnityEngine.Light");
    const AudioSource = UnityEngineAudio.class("UnityEngine.AudioSource");

    const MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
    const BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    const Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    const Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    const Physics = UnityEnginePhysics.class("UnityEngine.Physics");

    const Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    const CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    const GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    const Text = UnityEngineUI.class("UnityEngine.UI.Text");
    const Font = UnityEngineTextRendering.class("UnityEngine.Font");

    const GTPlayer = GTPlayerClass.field("<Instance>k__BackingField").value;
    const rigidbody = GTPlayer.field("_playerRigidBody").value;

    const UberShader = Shader.method("Find").invoke(Il2Cpp.string("Universal Render Pipeline/Unlit"));
    const TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"));

    const zeroVector = Vector3.field("zeroVector").value;
    const oneVector = Vector3.field("oneVector").value;
    const identityQuaternion = Quaternion.field("identityQuaternion").value;

    const NULL = Il2Cpp.reference(Il2Cpp.domain.assembly("mscorlib").image.class("System.Object").alloc());

    const instanceField = GTPlayerClass.fields.find(f => f.name.includes("Instance"));
    const instance = instanceField ? instanceField.value : null;


    const rightHandTransform = instance ? instance.field("rightHandTransform").value : null;
    const leftHandTransform = instance ? instance.field("leftHandTransform").value : null;
    const headCollider = instance.field("headCollider").value;
    const bodyCollider = instance.field("bodyCollider").value;
    const leftHandFollower = instance.field("leftHandFollower").value;
    const rightHandFollower = instance.field("rightHandFollower").value;
    const playerRigidBody = instance.field("_playerRigidBody").value;

    const arial = Resources
        .method("GetBuiltinResource", 1)
        .inflate(Font)
        .invoke(Il2Cpp.string("Arial.ttf"));

    // ─── Helpers ──────────────────────────────────────────────────────────────

    function Destroy(object) {
        Object.method("Destroy", 1).invoke(object);
    }
    function spawnMob(mobId: number, pos: any, rot: any): any {
    try {
        const prefabGen = PrefabGen.field("_instance").value;
        if (!prefabGen || prefabGen.isNull()) return null;
        
        const spawnMobMethod = prefabGen.method("SpawnMobAsync", 6);
        if (spawnMobMethod) {
            return spawnMobMethod.invoke(mobId, pos, rot, NULL, NULL, Il2Cpp.string("menu"));
        }
        
        const spawnMobMethod2 = prefabGen.method("SpawnMob", 5);
        if (spawnMobMethod2) {
            return spawnMobMethod2.invoke(mobId, pos, rot, NULL, Il2Cpp.string("menu"));
        }
        
        const spawnMobMethod3 = prefabGen.method("SpawnNetworkPrefab", 3);
        if (spawnMobMethod3) {
            const mobName = getMobNameFromId(mobId);
            if (mobName) {
                return spawnMobMethod3.invoke(Il2Cpp.string(mobName), pos, rot);
            }
        }
        
        return null;
    } catch(e) {
        console.error("spawnMob error: " + e);
        return null;
    }
}



function getMobNameFromId(id: number): string {
    const mobNames: { [key: number]: string } = {
        1: "Angler",
        2: "AnglerMad",
        3: "Armstrong",
        4: "ArmstrongMad",
        5: "Banshee",
        6: "Bomb",
        7: "Bomber",
        8: "BomberFlashbang",
        9: "BomberMad",
        10: "Chicken",
        11: "Cyst",
        12: "FakeGorilla",
        13: "BigHead",
        14: "RedGreen",
        15: "Phantom",
        16: "EvilEye",
        17: "GiantThrower",
        18: "RedGreenMad",
        19: "Spider",
        20: "FlyingSwarm",
        21: "NextBot",
        22: "Segway",
        23: "NextBotStatic",
        24: "EvilEyePinata",
        25: "EvilEyePinataLarge",
        26: "Lanky",
        27: "Blob",
        28: "Cutie",
        29: "SpiderCave",
        30: "ForestMob",
        31: "Mimic",
        32: "GraveyardBoss",
        33: "Ringmaster",
        34: "Puppet",
        35: "PolypMass",
        36: "RobotDog",
        37: "Shadow",
        38: "Heart",
        39: "Slimey",
        40: "ShadowBoss",
        41: "BigShark",
        42: "EdenZombie",
        43: "Skinwalker"
    };
    return mobNames[id] || null;
}

function requestStateAuthoritySafe(target: any): void {
    try {
        if (!target || target.isNull()) return;
        const netObj = target.method("get_Object").invoke();
        if (netObj && !netObj.isNull()) {
            netObj.method("RequestStateAuthority").invoke();
        }
    } catch(e) {}
}
function fillBagWithItems(bag: any, itemId: string, randomizeItems: boolean = true): void {
    try {
        if (!bag || bag.isNull()) return;
        
        const bagGO = bag.method("get_gameObject").invoke();
        if (!bagGO || bagGO.isNull()) return;
        
        const gbo = bagGO.method("GetComponent", 1).inflate(GBOClass).invoke();
        if (!gbo || gbo.isNull()) return;
        
        const bagTransform = gbo.method("get_transform").invoke();
        if (!bagTransform || bagTransform.isNull()) return;
        
        const bagPos = bagTransform.method("get_position").invoke();
        const bagRot = bagTransform.method("get_rotation").invoke();
        
        for (let i = 0; i < 21; i++) {
            try {
                const offsetX = (Math.random() - 0.5) * 0.4;
                const offsetY = (Math.random() - 0.5) * 0.4 + 0.3;
                const offsetZ = (Math.random() - 0.5) * 0.4;
                
                const itemPos = Vector3.method("op_Addition").invoke(bagPos, [offsetX, offsetY, offsetZ]);
                const itemRot = Quaternion.method("Euler").invoke(Math.random() * 360, Math.random() * 360, Math.random() * 360);
                
                const item = spawnItemAtPos(itemId, itemPos, itemRot);
                if (!item || item.isNull()) continue;
                
                const itemGO = item.method("get_gameObject").invoke();
                if (!itemGO || itemGO.isNull()) continue;
                
                const itemGBO = itemGO.method("GetComponent", 1).inflate(GBOClass).invoke();
                if (!itemGBO || itemGBO.isNull()) continue;
                
                if (randomizeItems) {
                    const randScale = Math.floor(Math.random() * 256) - 128;
                    const randHue = Math.floor(Math.random() * 255) - 127;
                    const randSat = Math.floor(Math.random() * 148) - 20;
                    itemGBO.method("set_scaleModifier").invoke(randScale);
                    itemGBO.method("set_colorHue").invoke(randHue);
                    itemGBO.method("set_colorSaturation").invoke(randSat);
                }
                
                const itemRB = itemGO.method("GetComponent", 1).inflate(Rigidbody).invoke();
                if (itemRB && !itemRB.isNull()) {
                    itemRB.method("set_isKinematic").invoke(false);
                    itemRB.method("set_useGravity").invoke(true);
                    const randomVel = (Math.random() - 0.5) * 2;
                    itemRB.method("set_velocity").invoke([randomVel, Math.random() * 3 + 1, randomVel]);
                }
            } catch(e) {}
        }
    } catch(e) {
        console.log("Fill bag error: " + e);
    }
}

function getHeldGrabbable() {
    try {
        const player = NetPlayer.method("get_localPlayer").invoke();
        if (!player) return null;
        const interactor = player.method("GetHandInteractor", 1).invoke(0);
        if (!interactor) return null;
        const itemAnchor = interactor.field("_itemAnchor").value;
        if (!itemAnchor) return null;
        return itemAnchor.method("get_grabbableObject").invoke();
    } catch(e) {
        return null;
    }
}

    function normalizeWhitelistToken(value: any): string {
    try {
        if (value == null) return "";
        if (typeof value === "string") return value.trim().toLowerCase();
        if (typeof value === "number") return String(value).trim();
        if (value.content != null) return String(value.content).trim();
        return String(value).trim();
    } catch(_) {
        return "";
    }
}


function readVec3Components(vec: any): [number, number, number] {
    return [
        (vec.field("x").value as number) || 0,
        (vec.field("y").value as number) || 0,
        (vec.field("z").value as number) || 0
    ];
}

function smoothVec3(state: [number, number, number], target: [number, number, number], amount: number = 0.18) {
    state[0] = state[0] + ((target[0] - state[0]) * amount);
    state[1] = state[1] + ((target[1] - state[1]) * amount);
    state[2] = state[2] + ((target[2] - state[2]) * amount);
    return state;
}

function normalizeXZ(x: number, z: number): [number, number] {
    const mag = Math.sqrt((x * x) + (z * z));
    if (mag < 0.0001) return [0, 1];
    return [x / mag, z / mag];
}

function selfRPC(fn: () => void) {
    let _selfRPCBypass = false;
    _selfRPCBypass = true;
    try { fn(); } finally { _selfRPCBypass = false; }
}

function getPlayerWhitelistTokens(player: any): string[] {
    const tokens: string[] = [];
    try {
        const name = player.method("get_displayName").invoke();
        if (name && !name.isNull()) tokens.push(normalizeWhitelistToken(name));
    } catch(_) {}
    try {
        const userId = player.field("_userID").value;
        if (userId) tokens.push(normalizeWhitelistToken(userId));
    } catch(_) {}
    try {
        const playerId = player.method("get_playerId").invoke();
        if (playerId && !playerId.isNull()) tokens.push(normalizeWhitelistToken(playerId));
    } catch(_) {}
    return tokens;
}

function isPlayerWhitelisted(player: any): boolean {
    if (!whitelistEnabled) return true;
    try {
        let playerName = "";
        try {
            playerName = player.method("get_displayName").invoke().toString();
        } catch(e) {
            try {
                playerName = player.field("_displayName").value.toString();
            } catch(e2) {}
        }
        if (!playerName) return false;
        return whitelist.includes(playerName);
    } catch(e) {
        return false;
    }
}

function addToWhitelist(player: any): void {
    const tokens = getPlayerWhitelistTokens(player);
    for (const token of tokens) {
        if (!whitelist.includes(token)) whitelist.push(token);
    }
}

function removeFromWhitelist(player: any): void {
    const tokens = getPlayerWhitelistTokens(player);
    whitelist = whitelist.filter(w => !tokens.includes(w));
}

function getWhitelistTarget(gunData: any): any {
    if (!gunData || !gunData.ray || gunData.ray.isNull()) return null;
    try {
        const hitPoint = gunData.endPosition;
        const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
        let closestPlayer = null;
        let closestDist = 8.0;
        
        for (let i = 0; i < allPlayers.length; i++) {
            const p = allPlayers.get(i);
            if (!p || p.isNull() || playerIsLocal(p)) continue;
            if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
            const pPos = getTransform(p).method("get_position").invoke();
            const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
            if (dist < closestDist) {
                closestDist = dist;
                closestPlayer = p;
            }
        }
        return closestPlayer;
    } catch(e) {
        return null;
    }
}

function renderGun() {
    const StartPosition = rightHandTransform.method("get_position").invoke();
    const Direction = rightHandTransform.method("get_forward").invoke();

    const rayStartPosition = Vector3.method("op_Addition").invoke(
        StartPosition,
        Vector3.method("op_Multiply").invoke(Direction, 0.08)
    );

    const layerMask = -1;
    let finalRay = null;
    let EndPosition;

    try {
        const hits = Physics.method("RaycastAll", 5).invoke(rayStartPosition, Direction, 100.0, layerMask, 2);
        if (hits && !hits.isNull() && hits.length > 0) {
            let bestDistance = Number.POSITIVE_INFINITY;
            for (let i = 0; i < hits.length; i++) {
                const hit = hits.get(i);
                if (!hit || hit.isNull?.()) continue;
                const hitPoint = hit.method("get_point").invoke();
                const distance = Vector3.method("Distance").invoke(hitPoint, StartPosition) as number;
                if (distance < 0.08 || distance >= bestDistance) continue;
                bestDistance = distance;
                finalRay = hit;
            }
        }
    } catch(_) {}

    if (finalRay) {
        EndPosition = finalRay.method("get_point").invoke();
    } else {
        EndPosition = Vector3.method("op_Addition").invoke(
            StartPosition,
            Vector3.method("op_Multiply").invoke(Direction, 50)
        );
    }

    if (GunPointer == null || GunPointer.isNull?.()) {
        GunPointer = createObject(EndPosition, identityQuaternion, [0.08, 0.08, 0.08], 0, [1, 0.2, 0.2, 1]);
        try { Destroy(getComponent(GunPointer, Collider)); } catch(_) {}
    }
    GunPointer.method("SetActive").invoke(true);
    getTransform(GunPointer).method("set_position").invoke(EndPosition);
    const pMat = getComponent(GunPointer, Renderer).method("get_material").invoke();
    pMat.method("set_shader").invoke(TextShader);
    pMat.method("set_color").invoke(rightTrigger ? [1, 0, 0, 1] : [1, 0.5, 0, 1]);

    if (GunLine == null || GunLine.isNull?.()) {
        const lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
        GunLine = addComponent(lineObj, LineRenderer);
    } else {
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
    }

    const lineMat = GunLine.method("get_material").invoke();
    lineMat.method("set_shader").invoke(TextShader);

    const distance = Vector3.method("Distance").invoke(StartPosition, EndPosition) as number;
    const waveCount = Math.max(3, Math.floor(distance / 2));
    const totalPoints = waveCount * 2 + 1;
    
    GunLine.method("set_positionCount").invoke(totalPoints);
    GunLine.method("set_useWorldSpace").invoke(true);
    GunLine.method("set_startWidth").invoke(0.03);
    GunLine.method("set_endWidth").invoke(0.03);
    GunLine.method("set_startColor").invoke([1, 0.2, 0.2, 1]);
    GunLine.method("set_endColor").invoke([1, 0.2, 0.2, 1]);

    soundWaveTime += deltaTime * 3;

    for (let i = 0; i < totalPoints; i++) {
        const t = i / (totalPoints - 1);
        const pointPos = Vector3.method("Lerp").invoke(StartPosition, EndPosition, t);
        
        let x = pointPos.field("x").value;
        let y = pointPos.field("y").value;
        let z = pointPos.field("z").value;
        
        if (i % 2 === 1) {
            const waveIndex = Math.floor(i / 2);
            const wavePhase = (waveIndex / waveCount) * Math.PI * 2;
            const waveAmplitude = 0.15 * (1 - Math.abs(t - 0.5) * 1.5);
            const waveOffset = Math.sin(wavePhase + soundWaveTime) * waveAmplitude;
            
            y += waveOffset * 0.7;
            z += waveOffset * 0.7;
        }
        
        GunLine.method("SetPosition").invoke(i, [x, y, z]);
    }

    return { ray: finalRay, gunPointer: GunPointer, endPosition: EndPosition };
}

    function getHeldItem() {
    try {
        const player = NetPlayer.method("get_localPlayer").invoke();
        if (!player) return null;
        const interactor = player.method("GetHandInteractor", 1).invoke(0);
        if (!interactor) return null;
        const itemAnchor = interactor.field("_itemAnchor").value;
        if (!itemAnchor) return null;
        return itemAnchor.method("get_grabbableObject").invoke();
    } catch(e) {
        return null;
    }
}

function spawnNetworkPrefab(prefabName: string, pos: any, rot: any): any {
    try {
        const prefabGen = PrefabGen.field("_instance").value;
        if (!prefabGen || prefabGen.isNull()) return null;
        
        const runner = prefabGen.method("get_runner").invoke();
        if (!runner || runner.isNull()) {
            console.log("No runner found, trying alternative spawn method");
            return spawnNetworkPrefabAlternative(prefabName, pos, rot);
        }
        
        const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
        const count = sources.method("get_Count").invoke();
        
        for (let i = 0; i < count; i++) {
            try {
                const source = sources.method("get_Item").invoke(i);
                const desc = source.method("get_Description").invoke().toString();
                if (desc.includes(prefabName)) {
                    const no = source.method("WaitForResult").invoke();
                    if (!no || no.isNull()) return null;
                    
                    const spawnMethod = runner.method("Spawn", 3);
                    if (spawnMethod) {
                        return spawnMethod.invoke(no, pos, rot);
                    }
                }
            } catch(_) { }
        }
        
        return spawnNetworkPrefabAlternative(prefabName, pos, rot);
    } catch(e) {
        console.error("spawnNetworkPrefab error: " + e);
        return spawnNetworkPrefabAlternative(prefabName, pos, rot);
    }
}

function spawnNetworkPrefabAlternative(prefabName: string, pos: any, rot: any): any {
    try {
        const prefabGen = PrefabGen.field("_instance").value;
        if (!prefabGen || prefabGen.isNull()) return null;
        
        const spawnMethod = prefabGen.method("SpawnNetworkPrefab", 3);
        if (spawnMethod) {
            return spawnMethod.invoke(Il2Cpp.string(prefabName), pos, rot);
        }
        
        const spawnMethod2 = prefabGen.method("SpawnPrefab", 3);
        if (spawnMethod2) {
            return spawnMethod2.invoke(Il2Cpp.string(prefabName), pos, rot);
        }
        
        const spawnMethod3 = prefabGen.method("Spawn", 3);
        if (spawnMethod3) {
            return spawnMethod3.invoke(Il2Cpp.string(prefabName), pos, rot);
        }
        
        return null;
    } catch(e) {
        console.error("spawnNetworkPrefabAlternative error: " + e);
        return null;
    }
}


   function spawnChristmasBox(pos: any, rot: any): any {
    try {
        const paths = [
            "ChristmasBox",
            "prefab/ChristmasBox", 
            "item_prefab/ChristmasBox",
            "ChristmasBoxPrefab"
        ];
        
        for (let path of paths) {
            try {
                const result = PrefabGen.method("SpawnItem", 4).invoke(
                    Il2Cpp.string(path),
                    pos,
                    rot,
                    NULL
                );
                if (result && !result.isNull()) {
                    console.log("Spawned ChristmasBox with path: " + path);
                    return result;
                }
            } catch(e) {}
        }
        
        const runner = PrefabGen.field("_instance").value.method("get_runner").invoke();
        if (runner && !runner.isNull()) {
            const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
            const count = sources.method("get_Count").invoke();
            
            for (let i = 0; i < count; i++) {
                const source = sources.method("get_Item").invoke(i);
                const desc = source.method("get_Description").invoke().toString();
                if (desc === "ChristmasBox" || desc.includes("ChristmasBox")) {
                    const no = source.method("WaitForResult").invoke();
                    if (no && !no.isNull()) {
                        try {
                            const result = runner.method("Spawn", 3).invoke(no, pos, rot);
                            return result;
                        } catch(e) {}
                    }
                }
            }
        }
        
        return null;
    } catch(e) {
        console.log("spawnChristmasBox error: " + e);
        return null;
    }
}


function updateOrbit() {
    if (!orbitEnabled) return;
    if (orbiters.length === 0) return;
    
    try {
        const headPos = getTransform(headCollider).method("get_position").invoke();
        const deltaTime = Time.method("get_deltaTime").invoke();
        const radius = 3.0;
        const speed = 1.5;
        
        for (let i = 0; i < orbiters.length; i++) {
            const orb = orbiters[i];
            if (!orb || !orb.obj || orb.obj.isNull()) {
                console.log("Orbiter " + i + " is null, removing");
                orbiters.splice(i, 1);
                i--;
                continue;
            }
            
            orb.angle += speed * deltaTime;
            if (orb.angle > Math.PI * 2) orb.angle -= Math.PI * 2;
            
            const x = headPos.field("x").value + Math.cos(orb.angle) * radius;
            const z = headPos.field("z").value + Math.sin(orb.angle) * radius;
            const y = headPos.field("y").value + 1.0;
            
            try {
                const tf = orb.obj.method("get_transform").invoke();
                tf.method("set_position").invoke([x, y, z]);
            } catch(e) {
                console.log("Failed to update position for orb " + i);
            }
        }
    } catch(e) {
        console.log("Update orbit error: " + e);
    }
}


function cleanupOrbiters() {
    console.log("Cleaning up " + orbitPrefabs.length + " orbiters");
    for (let i = 0; i < orbitPrefabs.length; i++) {
        const orb = orbitPrefabs[i];
        if (orb && !orb.isNull()) {
            try {
                const runner = orb.method("get_Runner").invoke();
                if (runner && !runner.isNull()) {
                    runner.method("Despawn").invoke(orb);
                } else {
                    Object.method("Destroy", 1).invoke(orb);
                }
            } catch(e) {
                try {
                    Object.method("Destroy", 1).invoke(orb);
                } catch(e2) {}
            }
        }
    }
    orbiters = [];
    orbitPrefabs = [];
    console.log("Cleanup complete");
}

    function getComponent(obj: any, type) {
        return obj.method("GetComponent", 1).inflate(type).invoke();
    }

    function addComponent(obj: any, type) {
        return obj.method("AddComponent", 1).inflate(type).invoke();
    }

    function getTransform(obj: any) {
        return obj.method("get_transform").invoke();
    }

    function world2Player(position) {
        position = Vector3.method("op_Subtraction", 2).invoke(position, getTransform(bodyCollider).method("get_position").invoke());
        position = Vector3.method("op_Addition", 2).invoke(position, getTransform(GTPlayer).method("get_position").invoke());
        return position;
    }

    function teleportPlayer(position) {
        const player = NetPlayer.method("get_localPlayer").invoke();
        if (!player) return;
        player.method("RPC_Teleport").invoke(world2Player(position));
    }

    function playerIsLocal(player) {
        return player.method("get_IsMine").invoke();
    }

    function kickPlayer(player) {
        const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
        const netinst = PrefabGenerator.field("_instance").value;
        if (!netinst) return null;
        const kickplr = PrefabGenerator.method("KickPlayer");
        if (!kickplr) return null;
        const rpckickplr = netinst.method("RPC_KickPlayer");
        if (!rpckickplr) return null;
        const plruserID = player.field("_userID").value;
        if (!plruserID) return null;
        const parsedid = Il2Cpp.corlib.class("System.Guid").method("Parse").invoke(plruserID);
        rpckickplr.invoke(parsedid);
        kickplr.invoke(plruserID);
    }

    function kickAllPlayers() {
        try {
            let kickCount = 0;
            const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
            for (let i = 0; i < rigs.length; i++) {
                const rig = rigs.get(i);
                if (playerIsLocal(rig)) continue;
                kickPlayer(rig);
                kickCount++;
            }
            console.log(`[+] Kicked ${kickCount} players`);
            sendNotification(`Kicked ${kickCount} players`, false);
        } catch (e) {
            console.log(`[-] Error in kickAllPlayers: ${e}`);
        }
    }

    function UnlockAll() {
        const appClass = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.App");
        const appStateClass = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.AppState");
        const netSessionStateClass = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.UserState");
        const netSessionStateClass2 = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.UserInventoryState");
        const stateObject = appClass.method("get_state").invoke();
        const netSessionObject = appStateClass.method("get_user").bind(stateObject).invoke();
        const invObject = netSessionStateClass.method("get_inventory").bind(netSessionObject).invoke();
        const moderateRoomObject = netSessionStateClass.method("get_isDeveloper").bind(netSessionObject).invoke();
        const devallitemsObject = netSessionStateClass2.method("get_devOwnAllAvatarItemsOverride").bind(invObject).invoke();
        moderateRoomObject.method("set_value").invoke(true);
        devallitemsObject.method("set_value").invoke(true);
    }

    function spawnItemAtPos(bareID: string, pos: any, rot: any): any {
        try {
            const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(bareID));
            if (prefab && !prefab.isNull()) {
                const result = PrefabGen.method("SpawnItem", 4).invoke(prefab, pos, rot, NULL);
                if (result && !result.isNull()) return result;
            }
            const result2 = PrefabGen.method("SpawnItem", 4).invoke(Il2Cpp.string(bareID), pos, rot, NULL);
            if (result2 && !result2.isNull()) return result2;
            return PrefabGen.method("SpawnItem", 4).invoke(Il2Cpp.string("item_prefab/" + bareID), pos, rot, NULL);
        } catch (e) {
            return null;
        }
    }

    // ─── Movement helpers ─────────────────────────────────────────────────────

    function updateFly() {
        try {
            const rb = playerRigidBody;
            rb.method("set_useGravity").invoke(false);
            rb.method("set_velocity").invoke(zeroVector);

            const up = Vector3.field("upVector").value;
            const down = Vector3.method("op_Negation").invoke(up);
            const speed = 3.0;

            if (leftGrab && rightGrab) {
            } else if (leftGrab) {
                rb.method("set_velocity").invoke(Vector3.method("op_Multiply").invoke(up, speed));
            } else if (rightGrab) {
                rb.method("set_velocity").invoke(Vector3.method("op_Multiply").invoke(down, speed));
            }
        } catch (e) {
            console.log("Fly error: " + e);
        }
    }

    function disableFly() {
        try {
            playerRigidBody.method("set_useGravity").invoke(true);
        } catch (e) { }
    }

    function updatePlatforms() {
        try {
            if (leftGrab) {
                if (leftPlatform == null) {
                    leftPlatform = GameObject.method("CreatePrimitive").invoke(3); 
                    const col = getComponent(leftPlatform, Collider);
                    const rend = getComponent(leftPlatform, Renderer);
                    const mat = rend.method("get_material").invoke();
                    mat.method("set_shader").invoke(UberShader);
                    mat.method("set_color").invoke([0.2, 0.6, 1.0, 1.0]);
                    const rb = addComponent(leftPlatform, Rigidbody);
                    rb.method("set_isKinematic").invoke(true);
                }
                const lPos = leftHandTransform.method("get_position").invoke();
                const downOffset = Vector3.method("op_Multiply").invoke(Vector3.field("upVector").value, -0.15);
                const platPos = Vector3.method("op_Addition").invoke(lPos, downOffset);
                getTransform(leftPlatform).method("set_position").invoke(platPos);
                getTransform(leftPlatform).method("set_localScale").invoke([0.4, 0.05, 0.4]);
                leftPlatform.method("SetActive").invoke(true);
            } else {
                if (leftPlatform != null) {
                    leftPlatform.method("SetActive").invoke(false);
                }
            }

            if (rightGrab) {
                if (rightPlatform == null) {
                    rightPlatform = GameObject.method("CreatePrimitive").invoke(3);
                    const rend = getComponent(rightPlatform, Renderer);
                    const mat = rend.method("get_material").invoke();
                    mat.method("set_shader").invoke(UberShader);
                    mat.method("set_color").invoke([1.0, 0.4, 0.2, 1.0]);
                    const rb = addComponent(rightPlatform, Rigidbody);
                    rb.method("set_isKinematic").invoke(true);
                }
                const rPos = rightHandTransform.method("get_position").invoke();
                const downOffset = Vector3.method("op_Multiply").invoke(Vector3.field("upVector").value, -0.15);
                const platPos = Vector3.method("op_Addition").invoke(rPos, downOffset);
                getTransform(rightPlatform).method("set_position").invoke(platPos);
                getTransform(rightPlatform).method("set_localScale").invoke([0.4, 0.05, 0.4]);
                rightPlatform.method("SetActive").invoke(true);
            } else {
                if (rightPlatform != null) {
                    rightPlatform.method("SetActive").invoke(false);
                }
            }
        } catch (e) {
            console.log("Platform error: " + e);
        }
    }

    function destroyPlatforms() {
        try {
            if (leftPlatform != null) { Destroy(leftPlatform); leftPlatform = null; }
            if (rightPlatform != null) { Destroy(rightPlatform); rightPlatform = null; }
        } catch (e) { }
    }


    // ─── Menu rendering ───────────────────────────────────────────────────────

    function renderMenuText(canvasObject, text: string = "", color: [number, number, number, number] = [1, 1, 1, 1], pos = zeroVector, size = oneVector) {
        const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
        title.method("set_text").invoke(Il2Cpp.string(text));
        title.method("set_font").invoke(arial);
        title.method("set_fontSize").invoke(1);
        title.method("set_color").invoke(color);
        title.method("set_fontStyle").invoke(2);
        title.method("set_alignment").invoke(4);
        title.method("set_resizeTextForBestFit").invoke(true);
        title.method("set_resizeTextMinSize").invoke(0);
        const rectTransform = getComponent(title, RectTransform);
        rectTransform.method("set_sizeDelta").invoke(size);
        rectTransform.method("set_position").invoke(pos);
        rectTransform.method("set_rotation").invoke(Quaternion.method("Euler").invoke(180.0, 90.0, 90.0));
    }

    function createObject(pos = zeroVector, rot = identityQuaternion, scale = oneVector, primitiveType: number = 3, colorArr: [number, number, number, number] = [1, 1, 1, 1], parent = null) {
        const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);
        const renderer = getComponent(obj, Renderer);
        if (colorArr[3] == 0) {
            renderer.method("set_enabled").invoke(false);
        } else {
            const material = renderer.method("get_material").invoke();
            material.method("set_shader").invoke(UberShader);
            material.method("set_color").invoke(colorArr);
        }
        const transform = getTransform(obj);
        if (parent != null) transform.method("SetParent", 2).invoke(parent, false);
        transform.method("set_position").invoke(pos);
        transform.method("set_rotation").invoke(rot);
        transform.method("set_localScale").invoke(scale);
        return obj;
    }

    function sendNotification(NotificationText: string = "", requiresReload: boolean = true, clearTime: number = 5) {
        const isOld = (currentNotification == NotificationText);
        notifactionResetTime = time + clearTime;
        currentNotification = NotificationText;
        if (requiresReload && !isOld) reloadMenu();
    }

    let righthand = false;

    function renderMenu() {
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        Destroy(getComponent(menu, BoxCollider));

        const menuBackground = createObject([0.1, 0, 0], identityQuaternion, [0.1, 1, 1], 3, bgColor, getTransform(menu));
        Destroy(getComponent(menuBackground, BoxCollider));

        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const canvas = addComponent(canvasObject, Canvas);
        Destroy(getComponent(canvasObject, BoxCollider));

        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);

        renderMenuText(canvasObject, menuName + ` <color=grey>[</color><color=white>${currentPage + 1}</color><color=grey>]</color>`, textColor, [0.11, 0, 0.175], [1, 0.1]);

        if (time > notifactionResetTime) currentNotification = "";
        renderMenuText(canvasObject, currentNotification, textColor, [0.11, 0, 0.275], [1, 0.1]);

        const disconnectButton = createObject([0.1, 0.0, 0.225], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
        disconnectButton.method("set_name").invoke(Il2Cpp.string("@Disconnect"));
        addComponent(disconnectButton, GorillaReportButton);
        getComponent(disconnectButton, BoxCollider).method("set_isTrigger").invoke(true);
        renderMenuText(canvasObject, "Disconnect", textColor, [0.11, 0, 0.225], [1, 0.1]);

        const returnButton = createObject([0.1, -0.175, -0.225], identityQuaternion, [0.09, 0.09, 0.09], 3, buttonColor, getTransform(menu));
        returnButton.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"));
        addComponent(returnButton, GorillaReportButton);
        getComponent(returnButton, BoxCollider).method("set_isTrigger").invoke(true);
        renderMenuText(canvasObject, "<", textColor, [0.11, -0.175, -0.225], [1, 0.1]);

        {
            const pageButton = createObject([0.1, 0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
            pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));
            addComponent(pageButton, GorillaReportButton);
            getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, "<", textColor, [0.11, 0.2, 0], [1, 0.1]);
        }
        {
            const pageButton = createObject([0.1, -0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
            pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));
            addComponent(pageButton, GorillaReportButton);
            getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, ">", textColor, [0.11, -0.2, 0], [1, 0.1]);
        }

        let i = 0;
        const targetMods = buttons[currentCategory].slice(currentPage * 8).slice(0, 8);

        targetMods.forEach((buttonData, index) => {
            const button = createObject([0.105, 0, 0.13 - (i * 0.04)], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
            button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText));
            addComponent(button, GorillaReportButton);
            getComponent(button, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, buttonData.buttonText, textColor, [0.11, 0, 0.13 - (i * 0.04)], [1, 0.1]);
            updateButtonColor(button, buttonData);
            i++;
        });

        getTransform(menu).method("set_localScale").invoke(
            Vector3.method("op_Multiply").invoke(
                Vector3.method("op_Multiply").invoke(
                    getTransform(menu).method("get_localScale").invoke(),
                    GTPlayer.field("<playerScale>k__BackingField").value
                ),
                menuscale
            )
        );
        recenterMenu();
    }

    function renderReference() {
        if (righthand) {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, leftHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        } else {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
    }

    function recenterMenu() {
        const menuTransform = getTransform(menu);
        let targetPos, targetRot;
        if (righthand) {
            targetPos = rightHandTransform.method("get_position").invoke();
            targetRot = Quaternion.method("op_Multiply").invoke(rightHandTransform.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(0, 0, 180));
        } else {
            targetPos = leftHandTransform.method("get_position").invoke();
            targetRot = leftHandTransform.method("get_rotation").invoke();
        }
        if (LerpMenu) {
            const menuPos = menuTransform.method("get_position").invoke();
            const distance = Vector3.method("Distance").invoke(menuPos, zeroVector);
            if (distance < 1) {
                menuTransform.method("set_position").invoke(targetPos);
                menuTransform.method("set_rotation").invoke(targetRot);
            } else {
                menuTransform.method("set_position").invoke(Vector3.method("Lerp").invoke(menuPos, targetPos, deltaTime * 15));
                menuTransform.method("set_rotation").invoke(Quaternion.method("Slerp").invoke(menuTransform.method("get_rotation").invoke(), targetRot, deltaTime * 15));
            }
        } else {
            menuTransform.method("set_position").invoke(targetPos);
            menuTransform.method("set_rotation").invoke(targetRot);
        }
    }

    function reloadMenu() {
        if (menu != null) { Object.method("Destroy", 1).invoke(menu); menu = null; }
    }

    function updateButtonColor(button, buttonData) {
        const RendererClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Renderer");
        const renderer = getComponent(button, RendererClass);
        if (!renderer) return;
        const material = renderer.method("get_material").invoke();
        material.method("set_color").invoke(buttonData.enabled ? buttonPressedColor : buttonColor);
    }

    function playButtonSound() {
        const sound = buttonSound;
        const NetworkRunner = SFXManager.method("get__currentRunner").invoke();
        SFXManager.method("RPC_PlaySFX").invoke(NetworkRunner, sound, 1, leftHandTransform.method("get_position").invoke(), 1.0);
    }

    // ─── Button definitions ───────────────────────────────────────────────────

    interface ButtonInfoConfig {
        buttonText: string;
        method?: () => void;
        enableMethod?: () => void;
        disableMethod?: () => void;
        isTogglable?: boolean;
        toolTip?: string;
        enabled?: boolean;
    }

    class ButtonInfo {
        buttonText: string;
        method?: () => void;
        enableMethod?: () => void;
        disableMethod?: () => void;
        isTogglable: boolean;
        toolTip?: string;
        enabled: boolean;

        constructor(config: ButtonInfoConfig) {
            this.buttonText = config.buttonText;
            this.method = config.method;
            this.enableMethod = config.enableMethod;
            this.disableMethod = config.disableMethod;
            this.isTogglable = config.isTogglable ?? true;
            this.toolTip = config.toolTip ?? null;
            this.enabled = config.enabled ?? false;
        }
    }

    let currentCategory = 0;
    let currentPage = 0;

    // Category indices:
    // 0 = Main
    // 1 = Hidden (internal)
    // 2 = Settings
    // 3 = Spawn Mods
    // 4 = Local Player
    // 5 = Weapon Mods
    // 6 = Movement
    // 7 = Unskidded

    const buttons: ButtonInfo[][] = [

        // ── [0] Main ──────────────────────────────────────────────────────────
        [
            new ButtonInfo({
                buttonText: "Settings",
                method: () => { currentCategory = 2; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Settings category."
            }),
            new ButtonInfo({
                buttonText: "Spawn Mods",
                method: () => { currentCategory = 3; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Spawn Mods category."
            }),
            new ButtonInfo({
                buttonText: "Local Player",
                method: () => { currentCategory = 4; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Local Player category."
            }),
            new ButtonInfo({
                buttonText: "Weapon Mods",
                method: () => { currentCategory = 5; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Weapon Mods category."
            }),
            new ButtonInfo({
                buttonText: "Movement",
                method: () => { currentCategory = 6; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Movement category."
            }),
            new ButtonInfo({
                buttonText: "Prefabs",
                method: () => { currentCategory = 7; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Prefabs category."
            }),
                new ButtonInfo({
                buttonText: "Beta Mods (NW)",
                method: () => { currentCategory = 8; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Beta Mods category."
            }),
                new ButtonInfo({
                buttonText: "Teleport Mods",
                method: () => { currentCategory = 9; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Teleport Mods category."
            }),
                new ButtonInfo({
                buttonText: "Gun Mods",
                method: () => { currentCategory = 10; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Gun Mods category."
            }),
                new ButtonInfo({
                buttonText: "Whitelist Mods",
                method: () => { currentCategory = 11; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Whitelist Mods category."
                
            }),
                new ButtonInfo({
                buttonText: "Giveaway Mods",
                method: () => { currentCategory = 12; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Giveaway Mods category."
                
            }),
                new ButtonInfo({
                buttonText: "Anti Stuff",
                method: () => { currentCategory = 13; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the Anti Stuff category."
            }),
],
        

        // ── [1] Hidden (internal nav) ─────────────────────────────────────────
        [
            new ButtonInfo({
                buttonText: "Disconnect",
                method: () => {
                    const networkrunner = SFXManager.method("get__currentRunner").invoke();
                    const NManagerInst = NManager.method("get_instance").invoke();
                    NManagerInst.method("OnPlayerLeft").invoke(networkrunner, networkrunner.method("get_LocalPlayer").invoke());
                },
                isTogglable: false,
                toolTip: "Disconnects you from the room."
            }),
            new ButtonInfo({
                buttonText: "PreviousPage",
                method: () => {
                    const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;
                    currentPage--;
                    if (currentPage < 0) currentPage = lastPage;
                },
                isTogglable: false
            }),
            new ButtonInfo({
                buttonText: "NextPage",
                method: () => {
                    const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;
                    currentPage++;
                    currentPage %= lastPage + 1;
                },
                isTogglable: false
            }),
            new ButtonInfo({
                buttonText: "GlobalReturn",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns to the main category."
            }),
        ],

        // ── [2] Settings ──────────────────────────────────────────────────────
        [
            new ButtonInfo({
                buttonText: "Change Item ID",
                method: () => {
                    if (rightGrab) { itemIndex--; } else { itemIndex++; }
                    itemIndex = ((itemIndex % itemIDs.length) + itemIDs.length) % itemIDs.length;
                    sendNotification("<color=grey>[</color><color=#8000ff>MENU</color><color=grey>]</color> Item: " + itemIDs[itemIndex], false);
                },
                isTogglable: false,
                toolTip: "Cycles the item ID. Hold right grip to go backwards."
            }),
            new ButtonInfo({
                buttonText: "Stash Dupe",
                enableMethod: () => { stashDupeEnabled = true; },
                disableMethod: () => { stashDupeEnabled = false; },
                isTogglable: true,
                toolTip: "Duplicates items ejected from the stash trash chute."
            }),
            new ButtonInfo({
                buttonText: "Backpack Dupe",
                enableMethod: () => { backpackDupeEnabled = true; },
                disableMethod: () => { backpackDupeEnabled = false; },
                isTogglable: true,
                toolTip: "Prevents items from being removed from backpacks."
            }),
            new ButtonInfo({
                buttonText: "Stash Allow Moves",
                enableMethod: () => { stashAllowMoves = true; },
                disableMethod: () => { stashAllowMoves = false; },
                isTogglable: true,
                toolTip: "Allows all stash machine move operations."
            }),
            new ButtonInfo({
                buttonText: "Stash QOL Fix",
                enableMethod: () => { stashQOLFix = true; },
                disableMethod: () => { stashQOLFix = false; },
                isTogglable: true,
                toolTip: "Auto-fills the stash keypad 4x on press."
            }),
            new ButtonInfo({
                buttonText: "Arena No Despawn",
                enableMethod: () => { arenaItemKillerDisabled = true; },
                disableMethod: () => { arenaItemKillerDisabled = false; },
                isTogglable: true,
                toolTip: "Prevents arena items from despawning."
            }),
        ],

        // ── [3] Spawn Mods ────────────────────────────────────────────────────
        [
            // ── ITEM SPAWNING ─────────────────────────────────────────────────
            new ButtonInfo({
                buttonText: "Spawn Items",
                method: () => {
                    const handTransform = rightHandTransform;
                    if (rightSecondary && rightGrab) {
                        try {
                            const result = spawnItemAtPos(itemIDs[itemIndex], handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke());
                            if (!result || result.handle.isNull()) {
                                sendNotification("Spawn returned null: " + itemIDs[itemIndex], false);
                            } else {
                                sendNotification("Spawned: " + itemIDs[itemIndex], false);
                            }
                        } catch (e) {
                            sendNotification("Spawn failed: " + e, false);
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Spawns the selected item at your right hand (hold right grip + B)."
            }),

            new ButtonInfo({
    buttonText: "Rainbow Item Launcher",
    enableMethod: () => { itemLauncherEnabled = true; },
    disableMethod: () => { itemLauncherEnabled = false; itemLauncherDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!itemLauncherEnabled) return;
        if (!rightGrab) return;
        if (time < itemLauncherDelay) return;
        itemLauncherDelay = time + 0.05;

        try {
            const spawnPos = rightHandTransform.method("get_position").invoke();
            const forward  = rightHandTransform.method("get_forward").invoke();
            const rot      = rightHandTransform.method("get_rotation").invoke();

            const networkObj = spawnItemAtPos(itemIDs[itemIndex], spawnPos, rot);
            if (!networkObj || networkObj.isNull()) return;

            const go = networkObj.method("get_gameObject").invoke();
            if (!go || go.isNull()) return;

            try {
                const gbo = go.method("GetComponentInChildren", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    gbo.method("set_scaleModifier").invoke(Math.floor(Math.random() * 256) - 128); 
                    gbo.method("set_colorHue").invoke(Math.floor(Math.random() * 255) - 127);
                    gbo.method("set_colorSaturation").invoke(Math.floor(Math.random() * 148) - 20); 
                }
            } catch (e) {}

            const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
            const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
            if (!rb || rb.isNull()) return;

            rb.method("set_isKinematic").invoke(false);
            rb.method("set_useGravity").invoke(false);

            const vel = Vector3.method("op_Multiply", 2).invoke(forward, 120);
            rb.method("AddForce", 2).invoke(vel, 1);

        } catch (e) {
            console.log("ItemLauncher error: " + e);
        }
    },
    toolTip: "Hold right grip to launch rainbow items from your hand."
}),

new ButtonInfo({
    buttonText: "Spawn 100 Items at spawn",
    isTogglable: false,
    toolTip: "Spawns 100 random rainbow items in one bunch at spawn.",
    method: () => {
        try {
            const spawnPos = [-1299.70, 1.37, -1311.64];
            let spawnCount = 0;
            
            for (let i = 0; i < 100; i++) {
                try {
                    const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                    
                    const offsetX = (Math.random() - 0.5) * 0.5;
                    const offsetY = Math.random() * 0.5 + 0.1;
                    const offsetZ = (Math.random() - 0.5) * 0.5;
                    
                    const pos = Vector3.method("op_Addition").invoke(
                        spawnPos,
                        [offsetX, offsetY, offsetZ]
                    );
                    
                    const rot = Quaternion.method("Euler").invoke(
                        Math.random() * 360,
                        Math.random() * 360,
                        Math.random() * 360
                    );
                    
                    const result = spawnItemAtPos(randomItem, pos, rot);
                    if (!result || result.isNull()) continue;
                    
                    const go = result.method("get_gameObject").invoke();
                    if (!go || go.isNull()) continue;
                    
                    const gbo = go.method("GetComponentInChildren", 1).inflate(GBOClass).invoke();
                    if (gbo && !gbo.isNull()) {
                        const randScale = Math.floor(Math.random() * 256) - 128;
                        const randHue = Math.floor(Math.random() * 255) - 127;
                        const randSat = Math.floor(Math.random() * 148) - 20;
                        gbo.method("set_scaleModifier").invoke(randScale);
                        gbo.method("set_colorHue").invoke(randHue);
                        gbo.method("set_colorSaturation").invoke(randSat);
                    }
                    
                    const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
                    const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
                    if (rb && !rb.isNull()) {
                        const randomVelX = (Math.random() - 0.5) * 2;
                        const randomVelZ = (Math.random() - 0.5) * 2;
                        rb.method("set_velocity").invoke([randomVelX, Math.random() * 3 + 1, randomVelZ]);
                    }
                    
                    spawnCount++;
                } catch(e) {
                    console.log("Item spawn error: " + e);
                }
            }
            
            sendNotification("Spawned " + spawnCount + " rainbow items!", false);
        } catch(e) {
            sendNotification("Spawn 100 items failed: " + e, false);
        }
    }
}),

new ButtonInfo({
    buttonText: "Spawn 100 Items at you",
    isTogglable: false,
    toolTip: "Spawns 100 random rainbow items in one bunch at your current position.",
    method: () => {
        try {
            const playerPos = getTransform(GTPlayer).method("get_position").invoke();
            let spawnCount = 0;
            
            for (let i = 0; i < 100; i++) {
                try {
                    const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                    
                    const offsetX = (Math.random() - 0.5) * 0.5;
                    const offsetY = Math.random() * 0.5 + 0.1;
                    const offsetZ = (Math.random() - 0.5) * 0.5;
                    
                    const pos = Vector3.method("op_Addition").invoke(
                        playerPos,
                        [offsetX, offsetY, offsetZ]
                    );
                    
                    const rot = Quaternion.method("Euler").invoke(
                        Math.random() * 360,
                        Math.random() * 360,
                        Math.random() * 360
                    );
                    
                    const result = spawnItemAtPos(randomItem, pos, rot);
                    if (!result || result.isNull()) continue;
                    
                    const go = result.method("get_gameObject").invoke();
                    if (!go || go.isNull()) continue;
                    
                    const gbo = go.method("GetComponentInChildren", 1).inflate(GBOClass).invoke();
                    if (gbo && !gbo.isNull()) {
                        const randScale = Math.floor(Math.random() * 256) - 128;
                        const randHue = Math.floor(Math.random() * 255) - 127;
                        const randSat = Math.floor(Math.random() * 148) - 20;
                        gbo.method("set_scaleModifier").invoke(randScale);
                        gbo.method("set_colorHue").invoke(randHue);
                        gbo.method("set_colorSaturation").invoke(randSat);
                    }
                    
                    const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
                    const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
                    if (rb && !rb.isNull()) {
                        const randomVelX = (Math.random() - 0.5) * 2;
                        const randomVelZ = (Math.random() - 0.5) * 2;
                        rb.method("set_velocity").invoke([randomVelX, Math.random() * 3 + 1, randomVelZ]);
                    }
                    
                    spawnCount++;
                } catch(e) {
                    console.log("Item spawn error: " + e);
                }
            }
            
            sendNotification("Spawned " + spawnCount + " rainbow items at your location!", false);
        } catch(e) {
            sendNotification("Spawn 100 items failed: " + e, false);
        }
    }
}),

new ButtonInfo({
    buttonText: "100 Item Gun",
    enableMethod: () => { hundredItemGunEnabled = true; },
    disableMethod: () => { hundredItemGunEnabled = false; hundredItemGunDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!hundredItemGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            hundredItemGunDelay = 0;
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < hundredItemGunDelay) return;
        hundredItemGunDelay = time + 1.0;
        try {
            const hitPoint = gunData.endPosition;
            let spawnCount = 0;
            
            for (let i = 0; i < 100; i++) {
                try {
                    const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                    
                    const offsetX = (Math.random() - 0.5) * 0.5;
                    const offsetY = Math.random() * 0.5 + 0.1;
                    const offsetZ = (Math.random() - 0.5) * 0.5;
                    
                    const pos = Vector3.method("op_Addition").invoke(
                        hitPoint,
                        [offsetX, offsetY, offsetZ]
                    );
                    
                    const rot = Quaternion.method("Euler").invoke(
                        Math.random() * 360,
                        Math.random() * 360,
                        Math.random() * 360
                    );
                    
                    const result = spawnItemAtPos(randomItem, pos, rot);
                    if (!result || result.isNull()) continue;
                    
                    const go = result.method("get_gameObject").invoke();
                    if (!go || go.isNull()) continue;
                    
                    const gbo = go.method("GetComponentInChildren", 1).inflate(GBOClass).invoke();
                    if (gbo && !gbo.isNull()) {
                        const randScale = Math.floor(Math.random() * 256) - 128;
                        const randHue = Math.floor(Math.random() * 255) - 127;
                        const randSat = Math.floor(Math.random() * 148) - 20;
                        gbo.method("set_scaleModifier").invoke(randScale);
                        gbo.method("set_colorHue").invoke(randHue);
                        gbo.method("set_colorSaturation").invoke(randSat);
                    }
                    
                    const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
                    const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
                    if (rb && !rb.isNull()) {
                        const randomVelX = (Math.random() - 0.5) * 2;
                        const randomVelZ = (Math.random() - 0.5) * 2;
                        rb.method("set_velocity").invoke([randomVelX, Math.random() * 3 + 1, randomVelZ]);
                    }
                    
                    spawnCount++;
                } catch(e) {
                    console.log("Item spawn error: " + e);
                }
            }
            
            sendNotification("Spawned " + spawnCount + " items!", false);
        } catch(e) {
            sendNotification("100 Item Gun failed: " + e, false);
        }
    },
    toolTip: "Hold right grip to aim, pull trigger once to spawn 100 rainbow items."
}),

new ButtonInfo({
    buttonText: "Arrow Launcher",
    enableMethod: () => { arrowLauncherEnabled = true; },
    disableMethod: () => { arrowLauncherEnabled = false; arrowLauncherDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!arrowLauncherEnabled) return;
        if (!rightGrab) return;
        if (time < arrowLauncherDelay) return;
        arrowLauncherDelay = time + 0.05;

        try {
            const spawnPos = rightHandTransform.method("get_position").invoke();
            const forward = rightHandTransform.method("get_forward").invoke();
            const rot = rightHandTransform.method("get_rotation").invoke();

            const networkObj = spawnItemAtPos("item_arrow", spawnPos, rot);
            if (!networkObj || networkObj.isNull()) return;

            const go = networkObj.method("get_gameObject").invoke();
            if (!go || go.isNull()) return;

            const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
            const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
            if (!rb || rb.isNull()) return;

            rb.method("set_isKinematic").invoke(false);
            rb.method("set_useGravity").invoke(false);

            const vel = Vector3.method("op_Multiply", 2).invoke(forward, 120);
            rb.method("AddForce", 2).invoke(vel, 1);

        } catch (e) {
            console.log("Arrow launcher error: " + e);
        }
    },
    toolTip: "Hold right grip to launch arrows from your hand."
}),

new ButtonInfo({
    buttonText: "Bomb Arrow Launcher",
    enableMethod: () => { bombArrowLauncherEnabled = true; },
    disableMethod: () => { bombArrowLauncherEnabled = false; bombArrowLauncherDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!bombArrowLauncherEnabled) return;
        if (!rightGrab) return;
        if (time < bombArrowLauncherDelay) return;
        bombArrowLauncherDelay = time + 0.05;

        try {
            const spawnPos = rightHandTransform.method("get_position").invoke();
            const forward = rightHandTransform.method("get_forward").invoke();
            const rot = rightHandTransform.method("get_rotation").invoke();

            const networkObj = spawnItemAtPos("item_arrow_bomb", spawnPos, rot);
            if (!networkObj || networkObj.isNull()) return;

            const go = networkObj.method("get_gameObject").invoke();
            if (!go || go.isNull()) return;

            const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
            const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
            if (!rb || rb.isNull()) return;

            rb.method("set_isKinematic").invoke(false);
            rb.method("set_useGravity").invoke(false);

            const vel = Vector3.method("op_Multiply", 2).invoke(forward, 120);
            rb.method("AddForce", 2).invoke(vel, 1);

        } catch (e) {
            console.log("Bomb arrow launcher error: " + e);
        }
    },
    toolTip: "Hold right grip to launch bomb arrows from your hand."
}),


new ButtonInfo({
    buttonText: "Rainbow Item Spawner",
    enableMethod: () => { rainbowItemSpawnerEnabled = true; },
    disableMethod: () => { rainbowItemSpawnerEnabled = false; rainbowItemSpawnerDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!rainbowItemSpawnerEnabled) return;
        if (rightSecondary && rightGrab && time > rainbowItemSpawnerDelay) {
            rainbowItemSpawnerDelay = time + 0.08;
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                
                const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                const result = spawnItemAtPos(randomItem, pos, rot);
                if (!result || result.isNull()) return;
                
                const go = result.method("get_gameObject").invoke();
                if (!go || go.isNull()) return;
                
                const gbo = go.method("GetComponentInChildren", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    const randScale = Math.floor(Math.random() * 256) - 128;
                    const randHue = Math.floor(Math.random() * 255) - 127;
                    const randSat = Math.floor(Math.random() * 148) - 20;
                    gbo.method("set_scaleModifier").invoke(randScale);
                    gbo.method("set_colorHue").invoke(randHue);
                    gbo.method("set_colorSaturation").invoke(randSat);
                }
                
                const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
                const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
                if (rb && !rb.isNull()) {
                    const forward = rightHandTransform.method("get_forward").invoke();
                    const velocity = Vector3.method("op_Multiply", 2).invoke(forward, 15);
                    rb.method("set_velocity").invoke(velocity);
                }
                
                sendNotification("Spawned rainbow item", false);
            } catch(e) {
                console.log("Rainbow item spawner error: " + e);
            }
        }
    },
    toolTip: "Hold right grip + B to spawn random rainbow items from your hand."
}),

new ButtonInfo({
    buttonText: "Rainbow Item Launcher V2",
    enableMethod: () => { itemLauncherEnabled = true; },
    disableMethod: () => { itemLauncherEnabled = false; itemLauncherSelfDelay = 0; },
    isTogglable: true,
    method: () => {
        try {
            const useRight = rightGrab && rightTrigger;
            const useLeft = leftGrab && leftTrigger;
            if (!useRight && !useLeft) return;
            if (time <= itemLauncherSelfDelay) return;

            itemLauncherSelfDelay = time + 0.055;
            const currentItemId = itemIDs[itemIndex];
            const handTransform = useRight ? rightHandTransform : leftHandTransform;

            const spawned = spawnItemAtPos(currentItemId, handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke());
            
            if (!spawned || spawned.isNull()) {
                sendNotification("Item launch failed", false);
                return;
            }

            const r = Math.random();
            const g = Math.random();
            const b = Math.random();

            try {
                const go = spawned.method("get_gameObject").invoke();
                if (go && !go.isNull()) {
                    const renderer = go.method("GetComponent", 1).inflate(Renderer).invoke();
                    if (renderer && !renderer.isNull()) {
                        const mat = renderer.method("get_material").invoke();
                        if (mat && !mat.isNull()) {
                            mat.method("set_color").invoke([r, g, b, 1.0]);
                        }
                    }
                    
                    const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
                    const rb = go.method("GetComponent", 1).inflate(RBClass).invoke();
                    if (rb && !rb.isNull()) {
                        const forward = handTransform.method("get_forward").invoke();
                        rb.method("set_isKinematic").invoke(false);
                        rb.method("set_useGravity").invoke(false);
                        const vel = Vector3.method("op_Multiply", 2).invoke(forward, 35);
                        rb.method("AddForce", 2).invoke(vel, 1);
                    }
                }
            } catch (e) {
                console.log("Color apply error: " + e);
            }

        } catch(e) { 
            console.error("Item Launcher V2 error: " + e); 
        }
    },
    toolTip: "Hold grip + trigger to launch selected item with random color."
}),
new ButtonInfo({
    buttonText: "Rainbow Random Item Launcher",
    enableMethod: () => { rainbowRandomLauncherEnabled = true; },
    disableMethod: () => { rainbowRandomLauncherEnabled = false; rainbowRandomLauncherDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!rainbowRandomLauncherEnabled) return;
        if (!rightGrab) return;
        if (time < rainbowRandomLauncherDelay) return;
        rainbowRandomLauncherDelay = time + 0.05;

        try {
            const spawnPos = rightHandTransform.method("get_position").invoke();
            const forward = rightHandTransform.method("get_forward").invoke();
            const rot = rightHandTransform.method("get_rotation").invoke();

            const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
            const networkObj = spawnItemAtPos(randomItem, spawnPos, rot);
            if (!networkObj || networkObj.isNull()) return;

            const go = networkObj.method("get_gameObject").invoke();
            if (!go || go.isNull()) return;

            try {
                const gbo = go.method("GetComponentInChildren", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    const randScale = Math.floor(Math.random() * 256) - 128;
                    const randHue = Math.floor(Math.random() * 255) - 127;
                    const randSat = Math.floor(Math.random() * 148) - 20;
                    gbo.method("set_scaleModifier").invoke(randScale);
                    gbo.method("set_colorHue").invoke(randHue);
                    gbo.method("set_colorSaturation").invoke(randSat);
                }
            } catch (e) {}

            const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
            const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
            if (!rb || rb.isNull()) return;

            rb.method("set_isKinematic").invoke(false);
            rb.method("set_useGravity").invoke(false);

            const vel = Vector3.method("op_Multiply", 2).invoke(forward, 120);
            rb.method("AddForce", 2).invoke(vel, 1);

        } catch (e) {
            console.log("Rainbow random launcher error: " + e);
        }
    },
    toolTip: "Hold right grip to launch random rainbow items from your hand."
}),

new ButtonInfo({
    buttonText: "Rainbow Random Item Faster Launcher",
    enableMethod: () => { rainbowRandomLauncherEnabled = true; },
    disableMethod: () => { rainbowRandomLauncherEnabled = false; rainbowRandomLauncherDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!rainbowRandomLauncherEnabled) return;
        if (!rightGrab) return;
        if (time < rainbowRandomLauncherDelay) return;
        rainbowRandomLauncherDelay = time + 0.02;

        try {
            const spawnPos = rightHandTransform.method("get_position").invoke();
            const forward = rightHandTransform.method("get_forward").invoke();
            const rot = rightHandTransform.method("get_rotation").invoke();

            const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
            const networkObj = spawnItemAtPos(randomItem, spawnPos, rot);
            if (!networkObj || networkObj.isNull()) return;

            const go = networkObj.method("get_gameObject").invoke();
            if (!go || go.isNull()) return;

            try {
                const gbo = go.method("GetComponentInChildren", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    const randScale = Math.floor(Math.random() * 256) - 128;
                    const randHue = Math.floor(Math.random() * 255) - 127;
                    const randSat = Math.floor(Math.random() * 148) - 20;
                    gbo.method("set_scaleModifier").invoke(randScale);
                    gbo.method("set_colorHue").invoke(randHue);
                    gbo.method("set_colorSaturation").invoke(randSat);
                }
            } catch (e) {}

            const RBClass = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody");
            const rb = go.method("GetComponentInChildren", 1).inflate(RBClass).invoke();
            if (!rb || rb.isNull()) return;

            rb.method("set_isKinematic").invoke(false);
            rb.method("set_useGravity").invoke(false);

            const vel = Vector3.method("op_Multiply", 2).invoke(forward, 120);
            rb.method("AddForce", 2).invoke(vel, 1);

        } catch (e) {
            console.log("Rainbow random launcher error: " + e);
        }
    },
    toolTip: "Hold right grip to launch random rainbow items from your hand (faster speed)."
}),

            new ButtonInfo({
    buttonText: "Random Colored & Sized Item Spawner",
    enableMethod: () => { randomItemSpammerEnabled = true; randomItemGunEnabled = false; },
    disableMethod: () => { randomItemSpammerEnabled = false; },
    method: () => {
        if (!randomItemSpammerEnabled) return;
        if (rightSecondary && rightGrab && time > lastRandomSpawnTime) {
            lastRandomSpawnTime = time + 0.08;
            try {
                const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                const result = spawnItemAtPos(randomItem, pos, rot);
                if (result && !result.isNull()) {
                    const randHue = Math.floor(Math.random() * 255) - 127;
                    const randSat = Math.floor(Math.random() * 255) - 127;
                    const randScale = Math.floor(Math.random() * 255) - 128;
                    try { result.method("set_colorHue").invoke(randHue); } catch(e) {}
                    try { result.method("set_colorSaturation").invoke(randSat); } catch(e) {}
                    try { result.method("set_scaleModifier").invoke(randScale); } catch(e) {}
                }
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip + B to spawn random items with random colors and sizes."
}),
new ButtonInfo({
    buttonText: "Mob +",
    method: () => {
        mobIndex++;
        if (mobIndex >= mobIDs.length) {
            mobIndex = 0;
        }
        sendNotification("Mob: " + mobIDs[mobIndex].name + " (id=" + mobIDs[mobIndex].id + ")", false);
        reloadMenu();
    },
    isTogglable: false,
    toolTip: "Next mob in the list."
}),

new ButtonInfo({
    buttonText: "Mob -",
    method: () => {
        mobIndex--;
        if (mobIndex < 0) {
            mobIndex = mobIDs.length - 1;
        }
        sendNotification("Mob: " + mobIDs[mobIndex].name + " (id=" + mobIDs[mobIndex].id + ")", false);
        reloadMenu();
    },
    isTogglable: false,
    toolTip: "Previous mob in the list."
}),


new ButtonInfo({
    buttonText: "Mob Spawner Gun",
    enableMethod: () => { mobSpawnerGunEnabled = true; spawnMobGunEnabled = false; spawnMobEnabled = false; },
    disableMethod: () => { mobSpawnerGunEnabled = false; },
    method: () => {
        if (!mobSpawnerGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < mobSpawnerGunDelay) return;
        mobSpawnerGunDelay = time + 0.3;
        try {
            const hitPoint = gunData.endPosition;
            const mob = mobIDs[selectedMobForGun];
            const result = spawnMob(mob.id, hitPoint, identityQuaternion);
            if (result && !result.isNull()) {
                sendNotification("Spawned mob: " + mob.name, false);
            } else {
                sendNotification("Failed to spawn mob", false);
            }
        } catch(e) {
            sendNotification("Mob gun error: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to spawn selected mob at laser dot."
}),

new ButtonInfo({
    buttonText: "Random Colored & Sized Item Gun",
    enableMethod: () => { randomItemGunEnabled = true; randomItemSpammerEnabled = false; },
    disableMethod: () => { randomItemGunEnabled = false; },
    method: () => {
        if (!randomItemGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time > lastRandomSpawnTime) return;
        lastRandomSpawnTime = time + 0.08;
        try {
            const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
            const hitPoint = gunData.endPosition;
            const result = spawnItemAtPos(randomItem, hitPoint, identityQuaternion);
            if (result && !result.isNull()) {
                const randHue = Math.floor(Math.random() * 255) - 127;
                const randSat = Math.floor(Math.random() * 255) - 127;
                const randScale = Math.floor(Math.random() * 255) - 128;
                try { result.method("set_colorHue").invoke(randHue); } catch(e) {}
                try { result.method("set_colorSaturation").invoke(randSat); } catch(e) {}
                try { result.method("set_scaleModifier").invoke(randScale); } catch(e) {}
                const rb = result.method("GetComponent", 1).inflate(Rigidbody).invoke();
                if (rb && !rb.isNull()) {
                    const forward = rightHandTransform.method("get_forward").invoke();
                    const velocity = Vector3.method("op_Multiply", 2).invoke(forward, 20.0);
                    rb.method("set_velocity").invoke(velocity);
                }
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to spawn random items with random colors/sizes at laser dot."
}),

new ButtonInfo({
    buttonText: "Randomize Color And Size for All Items",
    enableMethod: () => { randomizeAllItemsEnabled = true; },
    disableMethod: () => { randomizeAllItemsEnabled = false; },
    method: () => {
        if (!randomizeAllItemsEnabled) return;
        if (frameCount % 10 !== 0) return;
        try {
            const allItems = Object.method("FindObjectsByType", 1).inflate(GBOClass).invoke(0);
            for (let i = 0; i < allItems.length; i++) {
                const item = allItems.get(i);
                if (!item || item.isNull()) continue;
                const randHue = Math.floor(Math.random() * 255) - 127;
                const randSat = Math.floor(Math.random() * 255) - 127;
                const randScale = Math.floor(Math.random() * 255) - 128;
                try { item.method("set_colorHue").invoke(randHue); } catch(e) {}
                try { item.method("set_colorSaturation").invoke(randSat); } catch(e) {}
                try { item.method("set_scaleModifier").invoke(randScale); } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Continuously randomizes the color and size of EVERY item in the game (including held items)."
}),


new ButtonInfo({
    buttonText: "Goop Fish Gun",
    enableMethod: () => { goopFishGunEnabled = true; },
    disableMethod: () => { goopFishGunEnabled = false; },
    method: () => {
        if (!goopFishGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < goopFishDelay) return;
        goopFishDelay = time + 0.01;
        try {
            const hitPoint = gunData.endPosition;
            const result = spawnItemAtPos("item_goopfish", hitPoint, identityQuaternion);
            if (result && !result.isNull()) {
                const rb = result.method("GetComponent", 1).inflate(Rigidbody).invoke();
                if (rb && !rb.isNull()) {
                    const forward = rightHandTransform.method("get_forward").invoke();
                    const velocity = Vector3.method("op_Multiply", 2).invoke(forward, 15.0);
                    rb.method("set_velocity").invoke(velocity);
                }
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to spawn a goop fish at the laser dot."
}),

new ButtonInfo({
    buttonText: "Spawn Gun",
    enableMethod: () => { spawnGunEnabled = true; mobGunEnabled = false; prefabGunEnabled = false; },
    disableMethod: () => { spawnGunEnabled = false; },
    method: () => {
        if (!spawnGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < lastGunTime) return;
        lastGunTime = time + 0.15;
        try {
            const hitPoint = gunData.endPosition;
            const result = spawnItemAtPos(itemIDs[itemIndex], hitPoint, identityQuaternion);
            if (!result || result.handle.isNull()) {
                sendNotification("Spawn failed: " + itemIDs[itemIndex], false);
            } else {
                sendNotification("Spawned: " + itemIDs[itemIndex], false);
            }
        } catch(e) {
            sendNotification("Spawn gun error: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim laser, pull trigger to spawn selected item at laser dot."
}),

            new ButtonInfo({
                buttonText: "Change Item ID +",
                method: () => {
                    itemIndex++;
                    itemIndex = ((itemIndex % itemIDs.length) + itemIDs.length) % itemIDs.length;
                    sendNotification("<color=grey>[</color><color=#8000ff>ITEM</color><color=grey>]</color> " + itemIDs[itemIndex], false);
                },
                isTogglable: false,
                toolTip: "Go forward through the item list."
            }),
            new ButtonInfo({
                buttonText: "Change Item ID -",
                method: () => {
                    itemIndex--;
                    itemIndex = ((itemIndex % itemIDs.length) + itemIDs.length) % itemIDs.length;
                    sendNotification("<color=grey>[</color><color=#8000ff>ITEM</color><color=grey>]</color> " + itemIDs[itemIndex], false);
                },
                isTogglable: false,
                toolTip: "Go backward through the item list."
            }),

            // ── MOB SPAWNING ──────────────────────────────────────────────────
new ButtonInfo({
    buttonText: "Spawn Mob at Hand",
    enableMethod: () => { spawnMobEnabled = true; },
    disableMethod: () => { spawnMobEnabled = false; },
    method: () => {
        if (!spawnMobEnabled) return;
        if (rightSecondary && rightGrab && time > mobSpawnDelay) {
            mobSpawnDelay = time + 0.3;
            try {
                const mob = mobIDs[mobIndex];
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                const result = spawnMob(mob.id, pos, rot);
                if (result && !result.isNull()) {
                    sendNotification("Spawning mob: " + mob.name + " (id=" + mob.id + ")", false);
                } else {
                    sendNotification("Mob spawn failed", false);
                }
            } catch(e) {
                sendNotification("Mob spawn failed: " + e, false);
            }
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip + B to spawn the selected mob at your right hand."
}),
new ButtonInfo({
    buttonText: "Mob +",
    method: () => {
        mobIndex++;
        mobIndex = ((mobIndex % mobIDs.length) + mobIDs.length) % mobIDs.length;
        sendNotification("Mob: " + mobIDs[mobIndex].name + " (id=" + mobIDs[mobIndex].id + ")", false);
        reloadMenu();
    },
    isTogglable: false,
    toolTip: "Next mob in the list."
}),
new ButtonInfo({
    buttonText: "Mob -",
    method: () => {
        mobIndex--;
        mobIndex = ((mobIndex % mobIDs.length) + mobIDs.length) % mobIDs.length;
        sendNotification("Mob: " + mobIDs[mobIndex].name + " (id=" + mobIDs[mobIndex].id + ")", false);
        reloadMenu();
    },
    isTogglable: false,
    toolTip: "Previous mob in the list."
}),
new ButtonInfo({
    buttonText: "Spawn Mob Gun",
    enableMethod: () => { spawnMobGunEnabled = true; spawnMobEnabled = false; },
    disableMethod: () => { spawnMobGunEnabled = false; },
    method: () => {
        if (!spawnMobGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time > mobSpawnDelay) return;
        mobSpawnDelay = time + 0.3;
        try {
            const hitPoint = gunData.endPosition;
            const mob = mobIDs[mobIndex];
            const result = spawnMob(mob.id, hitPoint, identityQuaternion);
            if (result && !result.isNull()) {
                sendNotification("Spawning mob: " + mob.name + " at laser dot", false);
            } else {
                sendNotification("Mob spawn failed", false);
            }
        } catch(e) {
            sendNotification("Mob gun failed: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to spawn selected mob at laser dot."
}),

            new ButtonInfo({
                buttonText: "Change Mob ID +",
                method: () => {
                    mobIndex++;
                    mobIndex = ((mobIndex % mobIDs.length) + mobIDs.length) % mobIDs.length;
                    sendNotification("<color=grey>[</color><color=#ff4444>MOB</color><color=grey>]</color> " + mobIDs[mobIndex], false);
                },
                isTogglable: false,
                toolTip: "Go forward through the mob list."
            }),
            new ButtonInfo({
                buttonText: "Change Mob ID -",
                method: () => {
                    mobIndex--;
                    mobIndex = ((mobIndex % mobIDs.length) + mobIDs.length) % mobIDs.length;
                    sendNotification("<color=grey>[</color><color=#ff4444>MOB</color><color=grey>]</color> " + mobIDs[mobIndex], false);
                },
                isTogglable: false,
                toolTip: "Go backward through the mob list."
            }),
new ButtonInfo({
    buttonText: "Rocket Fist",
    enableMethod: () => { rocketFistEnabled = true; boomspearFistEnabled = false; eggFistEnabled = false; dogFistEnabled = false; },
    disableMethod: () => { rocketFistEnabled = false; },
    method: () => {
        if (!rocketFistEnabled) return;
        const rightFist = rightGrab && !rightTrigger;
        if (!rightFist) return;
        if (time < lastFistTime) return;
        lastFistTime = time + 0.1;
        
        const forward = rightHandTransform.method("get_forward").invoke();
        const spawnPos = Vector3.method("op_Addition").invoke(
            rightHandTransform.method("get_position").invoke(),
            Vector3.method("op_Multiply", 2).invoke(forward, 0.85)
        );
        const rocket = spawnNetworkPrefab("RPGRocket", spawnPos, rightHandTransform.method("get_rotation").invoke());
        if (rocket && !rocket.isNull()) {
            const rb = rocket.method("GetComponent", 1).inflate(Rigidbody).invoke();
            if (rb && !rb.isNull()) {
                rb.method("set_velocity").invoke(Vector3.method("op_Multiply", 2).invoke(forward, 35.0));
            }
        }
    },
    isTogglable: true,
    toolTip: "Make a fist with right hand to launch a rocket."
}),

new ButtonInfo({
    buttonText: "Boomspear Fist",
    enableMethod: () => { boomspearFistEnabled = true; rocketFistEnabled = false; eggFistEnabled = false; dogFistEnabled = false; },
    disableMethod: () => { boomspearFistEnabled = false; },
    method: () => {
        if (!boomspearFistEnabled) return;
        const leftFist = leftGrab && !leftTrigger;
        if (!leftFist) return;
        if (time < lastFistTime) return;
        lastFistTime = time + 0.1;
        
        const forward = leftHandTransform.method("get_forward").invoke();
        const spawnPos = Vector3.method("op_Addition").invoke(
            leftHandTransform.method("get_position").invoke(),
            Vector3.method("op_Multiply", 2).invoke(forward, 0.85)
        );
        const boomspear = spawnNetworkPrefab("RPGRocketSpear", spawnPos, leftHandTransform.method("get_rotation").invoke());
        if (boomspear && !boomspear.isNull()) {
            const rb = boomspear.method("GetComponent", 1).inflate(Rigidbody).invoke();
            if (rb && !rb.isNull()) {
                rb.method("set_velocity").invoke(Vector3.method("op_Multiply", 2).invoke(forward, 35.0));
            }
        }
    },
    isTogglable: true,
    toolTip: "Make a fist with left hand to launch a boomspear."
}),

new ButtonInfo({
    buttonText: "Egg Fist",
    enableMethod: () => { eggFistEnabled = true; rocketFistEnabled = false; boomspearFistEnabled = false; dogFistEnabled = false; },
    disableMethod: () => { eggFistEnabled = false; },
    method: () => {
        if (!eggFistEnabled) return;
        const bothFists = rightGrab && !rightTrigger && leftGrab && !leftTrigger;
        if (!bothFists) return;
        if (time < lastFistTime) return;
        lastFistTime = time + 0.1;
        
        const forward = rightHandTransform.method("get_forward").invoke();
        const spawnPos = Vector3.method("op_Addition").invoke(
            rightHandTransform.method("get_position").invoke(),
            Vector3.method("op_Multiply", 2).invoke(forward, 0.85)
        );
        const egg = spawnNetworkPrefab("RPGRocketEgg", spawnPos, rightHandTransform.method("get_rotation").invoke());
        if (egg && !egg.isNull()) {
            const rb = egg.method("GetComponent", 1).inflate(Rigidbody).invoke();
            if (rb && !rb.isNull()) {
                rb.method("set_velocity").invoke(Vector3.method("op_Multiply", 2).invoke(forward, 40.0));
            }
        }
    },
    isTogglable: true,
    toolTip: "Make a fist with BOTH hands to launch an explosive egg."
}),

new ButtonInfo({
    buttonText: "Robot Dog RPG Fist",
    enableMethod: () => { dogFistEnabled = true; rocketFistEnabled = false; boomspearFistEnabled = false; eggFistEnabled = false; },
    disableMethod: () => { dogFistEnabled = false; },
    method: () => {
        if (!dogFistEnabled) return;
        const rightFist = rightGrab && !rightTrigger;
        if (!rightFist) return;
        if (time < lastFistTime) return;
        lastFistTime = time + 0.1;
        
        const forward = rightHandTransform.method("get_forward").invoke();
        const spawnPos = Vector3.method("op_Addition").invoke(
            rightHandTransform.method("get_position").invoke(),
            Vector3.method("op_Multiply", 2).invoke(forward, 0.85)
        );
        const dog = spawnNetworkPrefab("RobotDogRPG", spawnPos, rightHandTransform.method("get_rotation").invoke());
        if (dog && !dog.isNull()) {
            const rb = dog.method("GetComponent", 1).inflate(Rigidbody).invoke();
            if (rb && !rb.isNull()) {
                rb.method("set_velocity").invoke(Vector3.method("op_Multiply", 2).invoke(forward, 30.0));
            }
        }
    },
    isTogglable: true,
    toolTip: "Make a fist with right hand to launch a Robot Dog RPG."
}),
],
        

// ── [4] Local Player ──────────────────────────────────────────────────
[
    new ButtonInfo({
        buttonText: "Put Item Anywhere",
        enableMethod: () => { allowPutGBO = true; },
        disableMethod: () => { allowPutGBO = false; },
        isTogglable: true,
        toolTip: "Allows attaching items to back/hip anywhere."
    }),


new ButtonInfo({
    buttonText: "God Mode V2",
    enableMethod: () => {
        godModeV2Enabled = true;
        
        try {
            const playerController = AssemblyCSharp.class("AnimalCompany.PlayerController");
            const takeDamageMethod = playerController.method("TakeDamage");
            if (takeDamageMethod) {
                takeDamageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked damage!");
                        return;
                    }
                    return takeDamageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const netPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
            const takeDamageMethod = netPlayer.method("TakeDamage");
            if (takeDamageMethod) {
                takeDamageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked damage!");
                        return;
                    }
                    return takeDamageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const healthSystem = AssemblyCSharp.class("AnimalCompany.HealthSystem");
            const damageMethod = healthSystem.method("Damage");
            if (damageMethod) {
                damageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked damage!");
                        return;
                    }
                    return damageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const damageable = AssemblyCSharp.class("AnimalCompany.IDamageable");
            const takeDamageMethod = damageable.method("TakeDamage");
            if (takeDamageMethod) {
                takeDamageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked damage!");
                        return;
                    }
                    return takeDamageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const playerHealth = AssemblyCSharp.class("AnimalCompany.PlayerHealth");
            const takeDamageMethod = playerHealth.method("TakeDamage");
            if (takeDamageMethod) {
                takeDamageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked damage!");
                        return;
                    }
                    return takeDamageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const gorillaLocomotion = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion");
            const fallDamageMethod = gorillaLocomotion.method("ApplyFallDamage");
            if (fallDamageMethod) {
                fallDamageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked fall damage!");
                        return;
                    }
                    return fallDamageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const damageTrigger = AssemblyCSharp.class("AnimalCompany.DamageTrigger");
            const onTriggerEnter = damageTrigger.method("OnTriggerEnter");
            if (onTriggerEnter) {
                onTriggerEnter.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked damage trigger!");
                        return;
                    }
                    return onTriggerEnter.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const explosion = AssemblyCSharp.class("AnimalCompany.Explosion");
            const damageMethod = explosion.method("DealDamage");
            if (damageMethod) {
                damageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked explosion damage!");
                        return;
                    }
                    return damageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const mobController = AssemblyCSharp.class("AnimalCompany.MobController");
            const attackMethod = mobController.method("Attack");
            if (attackMethod) {
                attackMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked mob attack!");
                        return;
                    }
                    return attackMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const projectile = AssemblyCSharp.class("AnimalCompany.Projectile");
            const hitMethod = projectile.method("OnHit");
            if (hitMethod) {
                hitMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked projectile hit!");
                        return;
                    }
                    return hitMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const damageArea = AssemblyCSharp.class("AnimalCompany.DamageArea");
            const dealDamageMethod = damageArea.method("DealDamage");
            if (dealDamageMethod) {
                dealDamageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked damage area!");
                        return;
                    }
                    return dealDamageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const voidZone = AssemblyCSharp.class("AnimalCompany.VoidZone");
            const damageMethod = voidZone.method("DealDamage");
            if (damageMethod) {
                damageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked void damage!");
                        return;
                    }
                    return damageMethod.invoke();
                };
            }
        } catch(e) {}
        
        try {
            const lava = AssemblyCSharp.class("AnimalCompany.Lava");
            const damageMethod = lava.method("DealDamage");
            if (damageMethod) {
                damageMethod.implementation = function() {
                    if (godModeV2Enabled) {
                        console.log("[GOD MODE] Blocked lava damage!");
                        return;
                    }
                    return damageMethod.invoke();
                };
            }
        } catch(e) {}
        
        sendNotification("God Mode V2 ON", false);
    },
    disableMethod: () => {
        godModeV2Enabled = false;
        sendNotification("God Mode V2 OFF", false);
    },
    isTogglable: true,
    toolTip: "Prevents you from taking any damage from any source."
}),

    new ButtonInfo({
    buttonText: "Log My Position",
    method: () => {
        try {
            const pos = getTransform(GTPlayer).method("get_position").invoke();
            const x = pos.field("x").value.toFixed(2);
            const y = pos.field("y").value.toFixed(2);
            const z = pos.field("z").value.toFixed(2);
            const posText = `X: ${x}, Y: ${y}, Z: ${z}`;
            sendNotification(`Position: ${posText}`, false, 5);
            console.log(`[POSITION] ${posText}`);
        } catch(e) {
            sendNotification("Failed to get position", false);
        }
    },
    isTogglable: false,
    toolTip: "Logs your current position as a notification and to console."
}),

    new ButtonInfo({
    buttonText: "Teleport All to Me",
    method: () => {
        try {
            const myPos = getTransform(GTPlayer).method("get_position").invoke();
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let count = 0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (p && !p.isNull() && !playerIsLocal(p)) {
                    p.method("RPC_Teleport").invoke(myPos);
                    count++;
                }
            }
            sendNotification("Teleported " + count + " players to you!", false);
        } catch(e) {
            sendNotification("Teleport All failed: " + e, false);
        }
    },
    isTogglable: false,
    toolTip: "Teleports every other player directly to your location."
}),
    new ButtonInfo({
        buttonText: "Dev Mode",
        enableMethod: () => {
            try {
                const App = AssemblyCSharp.class("AnimalCompany.App");
                const userState = App.method("get_state").invoke().method("get_user").invoke();
                const prim = userState.method("get_isDeveloper").invoke();
                prim.field("_value").value = true;
            } catch (e) { }
            try {
                const PlayerWatch = AssemblyCSharp.class("AnimalCompany.PlayerWatch");
                const allWatches = PlayerWatch.field("_allWatches").value;
                const enumerator = allWatches.method("GetEnumerator").invoke();
                while (enumerator.method("MoveNext").invoke()) {
                    const watch = enumerator.method("get_Current").invoke();
                    if (watch.method("get_IsMine").invoke()) {
                        const dv = watch.field("_devMenuView").value;
                        if (dv && !dv.isNull()) {
                            dv.method("get_gameObject").invoke().method("SetActive").invoke(true);
                        }
                        break;
                    }
                }
            } catch (e) { }
        },
        disableMethod: () => {
            try {
                const App = AssemblyCSharp.class("AnimalCompany.App");
                const userState = App.method("get_state").invoke().method("get_user").invoke();
                userState.method("get_isDeveloper").invoke().field("_value").value = false;
            } catch (e) { }
            try {
                const PlayerWatch = AssemblyCSharp.class("AnimalCompany.PlayerWatch");
                const allWatches = PlayerWatch.field("_allWatches").value;
                const enumerator = allWatches.method("GetEnumerator").invoke();
                while (enumerator.method("MoveNext").invoke()) {
                    const watch = enumerator.method("get_Current").invoke();
                    if (watch.method("get_IsMine").invoke()) {
                        const dv = watch.field("_devMenuView").value;
                        if (dv && !dv.isNull()) {
                            dv.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        break;
                    }
                }
            } catch (e) { }
        },
        isTogglable: true,
        toolTip: "Enables developer mode and shows the dev watch menu."
    }),
new ButtonInfo({
    buttonText: "Set Name Believe On Top",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.handle.isNull()) { sendNotification("Not in a room", false); return; }
            // set_displayName is a networked property on NetPlayer (StatePrimitive<String>)
            try {
                player.method("set_displayName").invoke(Il2Cpp.string("Believe On Top"));
                sendNotification("Believe On Top", false);
            } catch(_) {
                // Fallback: write to the backing field directly
                try {
                    player.field("_displayName").value = Il2Cpp.string("Believe On Top");
                    sendNotification("Name set (field): Believe On Top", false);
                } catch(e2) {
                    sendNotification("Set name failed: " + e2, false);
                }
            }
        } catch(e) { sendNotification("Set Name: " + e, false); }
    },
    isTogglable: false,
    toolTip: "Sets your display name to Believe On Top via NetPlayer.set_displayName."
}),

new ButtonInfo({
    buttonText: "Set Name Moony",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.handle.isNull()) { sendNotification("Not in a room", false); return; }
            // set_displayName is a networked property on NetPlayer (StatePrimitive<String>)
            try {
                player.method("set_displayName").invoke(Il2Cpp.string("Moony"));
                sendNotification("Moony", false);
            } catch(_) {
                // Fallback: write to the backing field directly
                try {
                    player.field("_displayName").value = Il2Cpp.string("Moony2HP");
                    sendNotification("Name set (field): Moony", false);
                } catch(e2) {
                    sendNotification("Set name failed: Moony " + e2, false);
                }
            }
        } catch(e) { sendNotification("Set Name: Moony" + e, false); }
    },
    isTogglable: false,
    toolTip: "Sets your display name to Moony via NetPlayer.set_displayName."
}),

new ButtonInfo({
    buttonText: "Set Name <anon>",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.handle.isNull()) { sendNotification("Not in a room", false); return; }
            // set_displayName is a networked property on NetPlayer (StatePrimitive<String>)
            try {
                player.method("set_displayName").invoke(Il2Cpp.string("<anon>"));
                sendNotification("<anon>", false);
            } catch(_) {
                // Fallback: write to the backing field directly
                try {
                    player.field("_displayName").value = Il2Cpp.string("<anon>");
                    sendNotification("Name set (field): <anon>", false);
                } catch(e2) {
                    sendNotification("Set name failed: <anon> " + e2, false);
                }
            }
        } catch(e) { sendNotification("Set Name: <anon>" + e, false); }
    },
    isTogglable: false,
    toolTip: "Sets your display name to <anon> via NetPlayer.set_displayName."
}),

new ButtonInfo({
    buttonText: "Set Name Moony2HP",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.handle.isNull()) { sendNotification("Not in a room", false); return; }
            // set_displayName is a networked property on NetPlayer (StatePrimitive<String>)
            try {
                player.method("set_displayName").invoke(Il2Cpp.string("Moony2HP"));
                sendNotification("Moony2HP", false);
            } catch(_) {
                // Fallback: write to the backing field directly
                try {
                    player.field("_displayName").value = Il2Cpp.string("Moony2HP");
                    sendNotification("Name set (field): Moony2HP", false);
                } catch(e2) {
                    sendNotification("Set name failed: Moony " + e2, false);
                }
            }
        } catch(e) { sendNotification("Set Name: Moony" + e, false); }
    },
    isTogglable: false,
    toolTip: "Sets your display name to Moony2HP via NetPlayer.set_displayName."
}),
new ButtonInfo({
    buttonText: "Set Name M4",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.handle.isNull()) { sendNotification("Not in a room", false); return; }
            // set_displayName is a networked property on NetPlayer (StatePrimitive<String>)
            try {
                player.method("set_displayName").invoke(Il2Cpp.string("M4"));
                sendNotification("M4", false);
            } catch(_) {
                // Fallback: write to the backing field directly
                try {
                    player.field("_displayName").value = Il2Cpp.string("M4");
                    sendNotification("Name set (field): M4", false);
                } catch(e2) {
                    sendNotification("Set name failed: M4 " + e2, false);
                }
            }
        } catch(e) { sendNotification("Set Name: M4" + e, false); }
    },
    isTogglable: false,
    toolTip: "Sets your display name to M4 via NetPlayer.set_displayName."
}),

new ButtonInfo({
    buttonText: "Set Name Coda",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.handle.isNull()) { sendNotification("Not in a room", false); return; }
            // set_displayName is a networked property on NetPlayer (StatePrimitive<String>)
            try {
                player.method("set_displayName").invoke(Il2Cpp.string("Coda"));
                sendNotification("Coda <color=yellow>OWNER", false);
            } catch(_) {
                // Fallback: write to the backing field directly
                try {
                    player.field("_displayName").value = Il2Cpp.string("Coda <color=yellow>OWNER");
                    sendNotification("Name set (field): Coda", false);
                } catch(e2) {
                    sendNotification("Set name failed: Coda " + e2, false);
                }
            }
        } catch(e) { sendNotification("Set Name: Coda" + e, false); }
    },
    isTogglable: false,
    toolTip: "Sets your display name to Coda via NetPlayer.set_displayName."
}),
],
        // ── [5] Weapon Mods ───────────────────────────────────────────────────
        [
            new ButtonInfo({
                buttonText: "Inf Ammo Jetpack",
                enableMethod: () => { infAmmoJetpack = true; },
                disableMethod: () => { infAmmoJetpack = false; },
                isTogglable: true,
                toolTip: "Infinite jetpack uses."
            }),
            new ButtonInfo({
                buttonText: "Inf Ammo Flare Gun",
                enableMethod: () => { infAmmoFlare = true; },
                disableMethod: () => { infAmmoFlare = false; },
                isTogglable: true,
                toolTip: "Infinite flare gun ammo."
            }),
            new ButtonInfo({
                buttonText: "Inf Ammo Zipline",
                enableMethod: () => { infAmmoZipline = true; },
                disableMethod: () => { infAmmoZipline = false; },
                isTogglable: true,
                toolTip: "Infinite zipline gun ammo."
            }),
            new ButtonInfo({
                buttonText: "Inf Ammo Revolver",
                enableMethod: () => { infAmmoRevolver = true; },
                disableMethod: () => { infAmmoRevolver = false; },
                isTogglable: true,
                toolTip: "Infinite revolver ammo + always cocked."
            }),
            new ButtonInfo({
                buttonText: "Inf Ammo Arena Gun",
                enableMethod: () => { infAmmoArena = true; },
                disableMethod: () => { infAmmoArena = false; },
                isTogglable: true,
                toolTip: "Infinite arena pistol/shotgun ammo."
            }),
            new ButtonInfo({
                buttonText: "Inf Ammo Shotgun",
                enableMethod: () => { infAmmoShotgun = true; },
                disableMethod: () => { infAmmoShotgun = false; },
                isTogglable: true,
                toolTip: "Infinite shotgun ammo."
            }),
            new ButtonInfo({
                buttonText: "Inf Ammo RPG",
                enableMethod: () => { infAmmoRPG = true; },
                disableMethod: () => { infAmmoRPG = false; },
                isTogglable: true,
                toolTip: "Infinite RPG ammo."
            }),
                new ButtonInfo({
        buttonText: "No Weapon Cooldown",
        enableMethod: () => {
            // Hook Shotgun cooldown
            try {
                const shotgunCanShoot = AssemblyCSharp.class("AnimalCompany.Shotgun").method("get_canShoot");
                shotgunCanShoot.implementation = function () {
                    return true;
                };
            } catch(e) {}
            
            // Hook Arena guns cooldown
            try {
                const arenaCanShoot = AssemblyCSharp.class("AnimalCompany.AutoReloadGun").method("get_canShoot");
                arenaCanShoot.implementation = function () {
                    return true;
                };
            } catch(e) {}
            
            // Hook Revolver cooldown
            try {
                const revolverCanShoot = AssemblyCSharp.class("AnimalCompany.Revolver").method("get_canShoot");
                revolverCanShoot.implementation = function () {
                    return true;
                };
            } catch(e) {}
            
            sendNotification("No Weapon Cooldown ON", false);
        },
        disableMethod: () => {
            try {
                const shotgunCanShoot = AssemblyCSharp.class("AnimalCompany.Shotgun").method("get_canShoot");
                shotgunCanShoot.implementation = null;
            } catch(e) {}
            
            try {
                const arenaCanShoot = AssemblyCSharp.class("AnimalCompany.AutoReloadGun").method("get_canShoot");
                arenaCanShoot.implementation = null;
            } catch(e) {}
            
            try {
                const revolverCanShoot = AssemblyCSharp.class("AnimalCompany.Revolver").method("get_canShoot");
                revolverCanShoot.implementation = null;
            } catch(e) {}
            
            sendNotification("No Weapon Cooldown OFF", false);
        },
        isTogglable: true,
        toolTip: "Removes firing delay on shotguns, arena guns, and revolvers."
    }),
        ],

        // ── [6] Movement ──────────────────────────────────────────────────────
        [
new ButtonInfo({
    buttonText: "Fly",
    method: () => {
        const rightFist = rightGrab && rightTrigger;
        const leftFist  = leftGrab && leftTrigger;
        if (!rightFist && !leftFist) {
            smoothVec3(fistFlyVelocity, [0, 0, 0], 0.2);
            return;
        }
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.handle.isNull()) return;

            let desiredX = 0;
            let desiredY = 0;
            let desiredZ = 0;
            
            if (rightFist) {
                const rightForward = readVec3Components(rightHandTransform.method("get_forward").invoke());
                desiredX += rightForward[0];
                desiredY += rightForward[1];
                desiredZ += rightForward[2];
            }
            if (leftFist) {
                const leftForward = readVec3Components(leftHandTransform.method("get_forward").invoke());
                desiredX += leftForward[0];
                desiredY += leftForward[1];
                desiredZ += leftForward[2];
            }
            
            const desiredMag = Math.sqrt((desiredX * desiredX) + (desiredY * desiredY) + (desiredZ * desiredZ));
            if (desiredMag < 0.01) return;
            
            const speed = 0.32;
            const desired: [number, number, number] = [
                (desiredX / desiredMag) * speed,
                (desiredY / desiredMag) * speed,
                (desiredZ / desiredMag) * speed
            ];
            
            const smoothed = smoothVec3(fistFlyVelocity, desired, 0.16);
            selfRPC(() => player.method("RPC_AddForce").invoke(smoothed));
        } catch(e) { console.error("Fly:", e); }
    },
    isTogglable: true,
    toolTip: "Make a fist to fly where you point with slower smoother force."
}),

new ButtonInfo({
    buttonText: "change fly speed",
    method: () => {
        flySpeedIndex = (flySpeedIndex + 1) % flySpeeds.length;
        const speedNames = ["Slow", "Medium", "Fast", "Fastest"];
        sendNotification("Fly Speed: " + speedNames[flySpeedIndex], false);
        reloadMenu();
    },
    isTogglable: false,
    toolTip: "Switch between 10, 25, 60, and 150 speed."
}),

new ButtonInfo({
    buttonText: "Long Arms",
    enableMethod: () => {
        longArmsLevel = 1;
        getTransform(GTPlayer).method("set_localScale").invoke([1.25, 1.25, 1.25]);
        sendNotification("Long Arms ON", false);
    },
    disableMethod: () => {
        longArmsLevel = 0;
        getTransform(GTPlayer).method("set_localScale").invoke([1, 1, 1]);
        sendNotification("Long Arms OFF", false);
    },
    isTogglable: true,
    toolTip: "Gives you longer arms."
}),

new ButtonInfo({
    buttonText: "platforms",
    enableMethod: () => {
        platformsEnabled = true;
        leftPlatform = null;
        rightPlatform = null;
        sendNotification("Platforms ON - Hold grip to spawn platforms", false);
    },
    disableMethod: () => {
        platformsEnabled = false;
        if (leftPlatform) { Destroy(leftPlatform); leftPlatform = null; }
        if (rightPlatform) { Destroy(rightPlatform); rightPlatform = null; }
        sendNotification("Platforms OFF", false);
    },
    method: () => {
        if (!platformsEnabled) return;
        if (rightGrab) {
            if (rightPlatform == null) {
                rightPlatform = GameObject.method("CreatePrimitive").invoke(3);
                const rend = getComponent(rightPlatform, Renderer);
                const mat = rend.method("get_material").invoke();
                mat.method("set_shader").invoke(UberShader);
                mat.method("set_color").invoke([0.8, 0.2, 0.2, 0.9]);
                const rb = addComponent(rightPlatform, Rigidbody);
                rb.method("set_isKinematic").invoke(true);
                const col = getComponent(rightPlatform, Collider);
                col.method("set_isTrigger").invoke(false);
            }
            const handPos = rightHandTransform.method("get_position").invoke();
            const downOffset = Vector3.method("op_Multiply").invoke(Vector3.field("upVector").value, -0.1);
            const platPos = Vector3.method("op_Addition").invoke(handPos, downOffset);
            getTransform(rightPlatform).method("set_position").invoke(platPos);
            getTransform(rightPlatform).method("set_localScale").invoke([0.4, 0.05, 0.4]);
            rightPlatform.method("SetActive").invoke(true);
        } else {
            if (rightPlatform != null) {
                rightPlatform.method("SetActive").invoke(false);
            }
        }
        if (leftGrab) {
            if (leftPlatform == null) {
                leftPlatform = GameObject.method("CreatePrimitive").invoke(3);
                const rend = getComponent(leftPlatform, Renderer);
                const mat = rend.method("get_material").invoke();
                mat.method("set_shader").invoke(UberShader);
                mat.method("set_color").invoke([0.8, 0.2, 0.2, 0.9]);
                const rb = addComponent(leftPlatform, Rigidbody);
                rb.method("set_isKinematic").invoke(true);
                const col = getComponent(leftPlatform, Collider);
                col.method("set_isTrigger").invoke(false);
            }
            const handPos = leftHandTransform.method("get_position").invoke();
            const downOffset = Vector3.method("op_Multiply").invoke(Vector3.field("upVector").value, -0.1);
            const platPos = Vector3.method("op_Addition").invoke(handPos, downOffset);
            getTransform(leftPlatform).method("set_position").invoke(platPos);
            getTransform(leftPlatform).method("set_localScale").invoke([0.4, 0.05, 0.4]);
            leftPlatform.method("SetActive").invoke(true);
        } else {
            if (leftPlatform != null) {
                leftPlatform.method("SetActive").invoke(false);
            }
        }
    },
    isTogglable: true,
    toolTip: "Hold Grip to spawn a platform under your hand. Rotate your hand to tilt the platform."
}),
        ],

        // ── [7] Prefabs :3 ──────────────────────────────────────────────────
        [
        new ButtonInfo({
    buttonText: "Spawn Selected Prefab at Hand",
    method: () => {
        const pos = rightHandTransform.method("get_position").invoke();
        const rot = rightHandTransform.method("get_rotation").invoke();
        const result = spawnNetworkPrefab(prefabList[prefabIndex], pos, rot);
        if (result && !result.isNull()) {
            sendNotification("Spawned: " + prefabList[prefabIndex], false);
        } else {
            sendNotification("Failed to spawn! Join a lobby first.", false);
        }
    },
    isTogglable: false,
    toolTip: "Spawns the selected prefab at your right hand."
}),

new ButtonInfo({
    buttonText: "Selling Machine Gun",
    enableMethod: () => { sellingMachineGunEnabled = true; christmasBoxGunEnabled = false; deletePrefabGunEnabled = false; deleteItemGunEnabled = false; dropItemGunEnabled = false; },
    disableMethod: () => { sellingMachineGunEnabled = false; },
    method: () => {
        if (!sellingMachineGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            lastTriggerState = false;
            return;
        }
        const gunData = renderGun();
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        if (rightTrigger && !lastTriggerState) {
            lastTriggerState = true;
            try {
                const hitPoint = gunData.endPosition;
                const result = spawnNetworkPrefab("ItemSellingMachineController", hitPoint, identityQuaternion);
                if (result && !result.isNull()) {
                    sendNotification("Selling Machine spawned!", false);
                }
            } catch(e) {}
        } else if (!rightTrigger) {
            lastTriggerState = false;
        }
    },
    isTogglable: true,
    toolTip: "Pull trigger once to spawn a selling machine at laser dot."
}),

new ButtonInfo({
    buttonText: "Delete Prefab Gun",
    enableMethod: () => { deletePrefabGunEnabled = true; sellingMachineGunEnabled = false; christmasBoxGunEnabled = false; deleteItemGunEnabled = false; dropItemGunEnabled = false; },
    disableMethod: () => { deletePrefabGunEnabled = false; },
    method: () => {
        if (!deletePrefabGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            lastTriggerState = false;
            return;
        }
        const gunData = renderGun();
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        if (rightTrigger && !lastTriggerState) {
            lastTriggerState = true;
            try {
                const hitCollider = gunData.ray.method("get_collider").invoke();
                if (!hitCollider || hitCollider.isNull()) return;
                const hitGO = hitCollider.method("get_gameObject").invoke();
                if (!hitGO || hitGO.isNull()) return;
                
                const netObj = hitGO.method("GetComponent", 1).inflate(NetworkObjectClass).invoke();
                if (netObj && !netObj.isNull()) {
                    const runner = netObj.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(netObj);
                        sendNotification("Prefab deleted!", false);
                    }
                }
            } catch(e) {}
        } else if (!rightTrigger) {
            lastTriggerState = false;
        }
    },
    isTogglable: true,
    toolTip: "Aim at a prefab, pull trigger to delete it."
}),


new ButtonInfo({
    buttonText: "Christmas Box Gun",
    enableMethod: () => { christmasBoxGunEnabled = true; sellingMachineGunEnabled = false; deletePrefabGunEnabled = false; deleteItemGunEnabled = false; dropItemGunEnabled = false; },
    disableMethod: () => { christmasBoxGunEnabled = false; },
    method: () => {
        if (!christmasBoxGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            lastTriggerState = false;
            return;
        }
        const gunData = renderGun();
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        if (rightTrigger && !lastTriggerState) {
            lastTriggerState = true;
            try {
                const hitPoint = gunData.endPosition;
                const result = spawnNetworkPrefab("ChristmasBox", hitPoint, identityQuaternion);
                if (result && !result.isNull()) {
                    sendNotification("Christmas Box spawned!", false);
                }
            } catch(e) {}
        } else if (!rightTrigger) {
            lastTriggerState = false;
        }
    },
    isTogglable: true,
    toolTip: "Pull trigger once to spawn a Christmas box at laser dot."
}),
new ButtonInfo({
    buttonText: "Ram Bolt Spammer",
    enableMethod: () => { ramEventNetSpammerEnabled = true; },
    disableMethod: () => { ramEventNetSpammerEnabled = false; },
    method: () => {
        if (!ramEventNetSpammerEnabled) return;
        if (rightSecondary && rightGrab && time > ramEventNetDelay) {
            ramEventNetDelay = time + 0.02;
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                const result = spawnNetworkPrefab("RamEventNet", pos, rot);
                if (result && !result.isNull()) {
                    sendNotification("Spawned RamEventNet", false);
                }
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip + B to rapidly spawn RamEventNet prefabs."
}),

new ButtonInfo({
    buttonText: "Ram Bolt Gun",
    enableMethod: () => { ramEventNetGunEnabled = true; },
    disableMethod: () => { ramEventNetGunEnabled = false; },
    method: () => {
        if (!ramEventNetGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < ramEventNetGunDelay) return;
        ramEventNetGunDelay = time + 0.04;
        try {
            const hitPoint = gunData.endPosition;
            const result = spawnNetworkPrefab("RamEventNet", hitPoint, identityQuaternion);
            if (result && !result.isNull()) {
                const rb = result.method("GetComponent", 1).inflate(Rigidbody).invoke();
                if (rb && !rb.isNull()) {
                    const forward = rightHandTransform.method("get_forward").invoke();
                    const velocity = Vector3.method("op_Multiply", 2).invoke(forward, 15.0);
                    rb.method("set_velocity").invoke(velocity);
                }
                sendNotification("Spawned RamEventNet", false);
            }
        } catch(e) {
            sendNotification("RamEventNet gun error: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to spawn RamEventNet at laser dot."
}),

new ButtonInfo({
    buttonText: "Delete Item Gun",
    enableMethod: () => { deleteItemGunEnabled = true; sellingMachineGunEnabled = false; christmasBoxGunEnabled = false; deletePrefabGunEnabled = false; dropItemGunEnabled = false; },
    disableMethod: () => { deleteItemGunEnabled = false; },
    method: () => {
        if (!deleteItemGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            lastTriggerState = false;
            return;
        }
        const gunData = renderGun();
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        if (rightTrigger && !lastTriggerState) {
            lastTriggerState = true;
            try {
                const hitCollider = gunData.ray.method("get_collider").invoke();
                if (!hitCollider || hitCollider.isNull()) return;
                const hitGO = hitCollider.method("get_gameObject").invoke();
                if (!hitGO || hitGO.isNull()) return;
                
                const gbo = hitGO.method("GetComponent", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    const netObj = gbo.method("get_Object").invoke();
                    if (netObj && !netObj.isNull()) {
                        const runner = netObj.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(netObj);
                            sendNotification("Item deleted!", false);
                        }
                    }
                }
            } catch(e) {}
        } else if (!rightTrigger) {
            lastTriggerState = false;
        }
    },
    isTogglable: true,
    toolTip: "Aim at an item, pull trigger to delete it."
}),

new ButtonInfo({
    buttonText: "Drop Item Gun",
    enableMethod: () => { dropItemGunEnabled = true; sellingMachineGunEnabled = false; christmasBoxGunEnabled = false; deletePrefabGunEnabled = false; deleteItemGunEnabled = false; },
    disableMethod: () => { dropItemGunEnabled = false; },
    method: () => {
        if (!dropItemGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            lastTriggerState = false;
            return;
        }
        const gunData = renderGun();
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        if (rightTrigger && !lastTriggerState) {
            lastTriggerState = true;
            try {
                const hitCollider = gunData.ray.method("get_collider").invoke();
                if (!hitCollider || hitCollider.isNull()) return;
                const hitGO = hitCollider.method("get_gameObject").invoke();
                if (!hitGO || hitGO.isNull()) return;
                
                const gbo = hitGO.method("GetComponent", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    const pos = getTransform(gbo).method("get_position").invoke();
                    const rot = getTransform(gbo).method("get_rotation").invoke();
                    const zero = Vector3.field("zeroVector").value;
                    try { gbo.method("Release").invoke(pos, rot, zero, zero, false, false); } catch(e) {}
                    try { gbo.method("Drop").invoke(); } catch(e) {}
                    sendNotification("Item dropped!", false);
                }
            } catch(e) {}
        } else if (!rightTrigger) {
            lastTriggerState = false;
        }
    },
    isTogglable: true,
    toolTip: "Aim at an item a player is holding, pull trigger to make them drop it."
}),

new ButtonInfo({
    buttonText: "Spawn InflatedBalloon",
    enableMethod: () => { spawnBalloonEnabled = true; },
    disableMethod: () => { spawnBalloonEnabled = false; },
    method: () => {
        if (!spawnBalloonEnabled) return;
        if (rightSecondary && rightGrab && time > spawnDelay) {
            spawnDelay = time + 0.08;
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                const result = spawnNetworkPrefab("InflatedBalloon", pos, rot);
                if (result && !result.isNull()) {
                    sendNotification("Spawned InflatedBalloon", false);
                }
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip + B to rapidly spawn InflatedBalloon prefabs."
}),

new ButtonInfo({
    buttonText: "Spawn InflatedHeartBalloon",
    enableMethod: () => { spawnHeartBalloonEnabled = true; },
    disableMethod: () => { spawnHeartBalloonEnabled = false; },
    method: () => {
        if (!spawnHeartBalloonEnabled) return;
        if (rightSecondary && rightGrab && time > spawnDelay) {
            spawnDelay = time + 0.08;
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                const result = spawnNetworkPrefab("InflatedHeartBalloon", pos, rot);
                if (result && !result.isNull()) {
                    sendNotification("Spawned InflatedHeartBalloon", false);
                }
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip + B to rapidly spawn InflatedHeartBalloon prefabs."
}),

new ButtonInfo({
    buttonText: "Trap Player",
    enableMethod: () => { trapGunEnabled = true; },
    disableMethod: () => { trapGunEnabled = false; },
    method: () => {
        if (!trapGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const x = hitPoint.field("x").value as number;
            const y = hitPoint.field("y").value as number;
            const z = hitPoint.field("z").value as number;
            
            const angles = [0, 90, 180, 270];
            const offsets = [
                { x: 1.2, z: 0 },
                { x: -1.2, z: 0 },
                { x: 0, z: 1.2 },
                { x: 0, z: -1.2 }
            ];
            
            for (let i = 0; i < 4; i++) {
                const spawnX = x + offsets[i].x;
                const spawnZ = z + offsets[i].z;
                const spawnY = y;
                
                const machine = spawnNetworkPrefab("ItemSellingMachineController", [spawnX, spawnY, spawnZ], identityQuaternion);
                
                if (machine && !machine.isNull()) {
                    const tf = getTransform(machine);
                    const rotation = Quaternion.method("Euler").invoke(0, angles[i], 0);
                    tf.method("set_rotation").invoke(rotation);
                    
                    requestStateAuthoritySafe(machine);
                }
            }
            
            sendNotification("Player trapped with 4 selling machines!", false);
        } catch(e) {
            sendNotification("Trap error: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Shoot anywhere to spawn 4 selling machines in a plus shape around the hit point."
}),

new ButtonInfo({
    buttonText: "Prefab Gun",
    enableMethod: () => { prefabGunEnabled = true; spawnGunEnabled = false; },
    disableMethod: () => { prefabGunEnabled = false; },
    method: () => {
        if (!prefabGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        try {
            const hitPoint = gunData.endPosition;
            const prefabName = prefabList[prefabIndex];
            const result = spawnNetworkPrefab(prefabName, hitPoint, identityQuaternion);
            if (!result || result.isNull()) {
                sendNotification("Prefab spawn failed: " + prefabName, false);
            } else {
                sendNotification("Spawned prefab: " + prefabName, false);
            }
        } catch(e) {
            sendNotification("Prefab gun error: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to spawn selected prefab at laser dot."
}),
new ButtonInfo({
    buttonText: "Prefab +",
    method: () => {
        prefabIndex++;
        prefabIndex = ((prefabIndex % prefabList.length) + prefabList.length) % prefabList.length;
        sendNotification("Selected: " + prefabList[prefabIndex], false);
        reloadMenu();
    },
    isTogglable: false,
    toolTip: "Next prefab."
}),
new ButtonInfo({
    buttonText: "Prefab -",
    method: () => {
        prefabIndex--;
        prefabIndex = ((prefabIndex % prefabList.length) + prefabList.length) % prefabList.length;
        sendNotification("Selected: " + prefabList[prefabIndex], false);
        reloadMenu();
    },
    isTogglable: false,
    toolTip: "Previous prefab."
}), 
new ButtonInfo({
    buttonText: "Dyson Sphere Christmas Boxes",
    enableMethod: () => {
        if (dysonSphereEnabled) return;
        dysonSphereEnabled = true;
        dysonSphereRingAngles = [0, 0];
        dysonSphereRingTilt = 0;
        dysonSphereTiltDirection = 1;
        
        for (let ring = 0; ring < 2; ring++) {
            const ringObjects = [];
            const ringRadius = ring === 0 ? 3.5 : 5.0;
            const ringCount = ring === 0 ? 12 : 18;
            
            for (let i = 0; i < ringCount; i++) {
                const box = spawnNetworkPrefab("ChristmasBox", [0, 0, 0], identityQuaternion);
                if (box && !box.isNull()) {
                    ringObjects.push(box);
                }
            }
            dysonSphereRings[ring] = ringObjects;
        }
        
        sendNotification("Dyson Sphere Christmas Boxes Spawned!", false);
    },
    disableMethod: () => {
        dysonSphereEnabled = false;
        for (let ring = 0; ring < dysonSphereRings.length; ring++) {
            for (let i = 0; i < dysonSphereRings[ring].length; i++) {
                const obj = dysonSphereRings[ring][i];
                if (obj && !obj.isNull()) {
                    try {
                        const runner = obj.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(obj);
                        }
                    } catch(e) {}
                }
            }
        }
        dysonSphereRings = [[], []];
        sendNotification("Dyson Sphere Removed", false);
    },
    method: () => {
        if (!dysonSphereEnabled) return;
        
        const center = getTransform(headCollider).method("get_position").invoke();
        const speed = 2.5;  
        const tiltSpeed = 0.8;
        
        dysonSphereRingAngles[0] += speed * deltaTime;
        dysonSphereRingAngles[1] += (speed * 0.8) * deltaTime;
        
        dysonSphereRingTilt += tiltSpeed * deltaTime * dysonSphereTiltDirection;
        if (dysonSphereRingTilt >= Math.PI) {
            dysonSphereRingTilt = Math.PI;
            dysonSphereTiltDirection = -1;
        } else if (dysonSphereRingTilt <= 0) {
            dysonSphereRingTilt = 0;
            dysonSphereTiltDirection = 1;
        }
        
        const tilt = Math.sin(dysonSphereRingTilt);
        
        for (let ring = 0; ring < dysonSphereRings.length; ring++) {
            const ringObjects = dysonSphereRings[ring];
            const ringRadius = ring === 0 ? 3.5 : 5.0;
            const ringCount = ringObjects.length;
            const ringAngle = dysonSphereRingAngles[ring];
            
            for (let i = 0; i < ringCount; i++) {
                const obj = ringObjects[i];
                if (!obj || obj.isNull()) continue;
                
                const angleOffset = (Math.PI * 2 / ringCount) * i;
                const angle = ringAngle + angleOffset;
                
                let x, y, z;
                
                if (ring === 0) {
                    x = center.field("x").value + Math.cos(angle) * ringRadius;
                    z = center.field("z").value + Math.sin(angle) * ringRadius;
                    y = center.field("y").value + Math.sin(angle * 2) * 0.5 + (tilt * 1.5);
                } else {
                    const verticalMix = Math.sin(angle * 2) * 0.6;
                    x = center.field("x").value + Math.cos(angle) * ringRadius * (1 - Math.abs(tilt) * 0.5);
                    z = center.field("z").value + Math.sin(angle) * ringRadius * (1 - Math.abs(tilt) * 0.5);
                    y = center.field("y").value + Math.sin(angle) * ringRadius * Math.abs(tilt) * 0.8 + verticalMix;
                }
                
                try {
                    const tf = obj.method("get_transform").invoke();
                    tf.method("set_position").invoke([x, y, z]);
                    
                    const lookPos = Vector3.method("op_Subtraction", 2).invoke(center, [x, y, z]);
                    const rot = Quaternion.method("LookRotation", 1).invoke(lookPos);
                    tf.method("set_rotation").invoke(rot);
                } catch(e) {}
            }
        }
    },
    isTogglable: true,
    toolTip: "Creates two rings of Christmas boxes that oscillate between vertical and horizontal orbits (faster speed)."
}),


new ButtonInfo({
    buttonText: "Spiral Christmas Boxes",
    enableMethod: () => {
        if (spiralChristmasEnabled) return;
        spiralChristmasEnabled = true;
        spiralChristmasAngle = 0;
        spiralChristmasHeight = 0;
        
        for (let i = 0; i < 30; i++) {
            const box = spawnNetworkPrefab("ChristmasBox", [0, 0, 0], identityQuaternion);
            if (box && !box.isNull()) {
                spiralChristmasObjects.push(box);
            }
        }
        sendNotification("Spiral Christmas Boxes Spawned!", false);
    },
    disableMethod: () => {
        spiralChristmasEnabled = false;
        for (let i = 0; i < spiralChristmasObjects.length; i++) {
            const obj = spiralChristmasObjects[i];
            if (obj && !obj.isNull()) {
                try {
                    const runner = obj.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(obj);
                    }
                } catch(e) {}
            }
        }
        spiralChristmasObjects = [];
        sendNotification("Spiral Christmas Boxes Removed", false);
    },
    method: () => {
        if (!spiralChristmasEnabled) return;
        
        const center = getTransform(headCollider).method("get_position").invoke();
        const radius = 3.5;
        const speed = 1.8;
        const riseSpeed = 0.7;
        
        spiralChristmasAngle += speed * deltaTime;
        spiralChristmasHeight += riseSpeed * deltaTime;
        
        if (spiralChristmasHeight > 7.0) spiralChristmasHeight = 0;
        
        for (let i = 0; i < spiralChristmasObjects.length; i++) {
            const obj = spiralChristmasObjects[i];
            if (!obj || obj.isNull()) continue;
            
            const angleOffset = (Math.PI * 2 / spiralChristmasObjects.length) * i;
            const angle = spiralChristmasAngle + angleOffset;
            const x = center.field("x").value + Math.cos(angle) * radius;
            const z = center.field("z").value + Math.sin(angle) * radius;
            const y = center.field("y").value + (spiralChristmasHeight + (i * 0.1)) % 7.0;
            
            try {
                const tf = obj.method("get_transform").invoke();
                tf.method("set_position").invoke([x, y, z]);
                
                const spinRot = Quaternion.method("Euler").invoke(0, spiralChristmasAngle * 200, 0);
                tf.method("set_rotation").invoke(spinRot);
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Creates 30 Christmas boxes that spiral upward while spinning."
}),

new ButtonInfo({
    buttonText: "Spiral Selling Machines",
    enableMethod: () => {
        if (spiralEnabled) return;
        spiralEnabled = true;
        spiralAngle = 0;
        spiralHeight = 0;
        
        for (let i = 0; i < 30; i++) {
            const machine = spawnNetworkPrefab("ItemSellingMachineController", [0, 0, 0], identityQuaternion);
            if (machine && !machine.isNull()) {
                spiralObjects.push(machine);
            }
        }
        sendNotification("Spiral Selling Machines Spawned!", false);
    },
    disableMethod: () => {
        spiralEnabled = false;
        for (let i = 0; i < spiralObjects.length; i++) {
            const obj = spiralObjects[i];
            if (obj && !obj.isNull()) {
                try {
                    const runner = obj.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(obj);
                    }
                } catch(e) {}
            }
        }
        spiralObjects = [];
        sendNotification("Spiral Selling Machines Removed", false);
    },
    method: () => {
        if (!spiralEnabled) return;
        
        const center = getTransform(headCollider).method("get_position").invoke();
        const radius = 4.0;
        const speed = 1.5;
        const riseSpeed = 0.8;
        
        spiralAngle += speed * deltaTime;
        spiralHeight += riseSpeed * deltaTime;
        
        if (spiralHeight > 8.0) spiralHeight = 0;
        
        for (let i = 0; i < spiralObjects.length; i++) {
            const obj = spiralObjects[i];
            if (!obj || obj.isNull()) continue;
            
            const angleOffset = (Math.PI * 2 / spiralObjects.length) * i;
            const angle = spiralAngle + angleOffset;
            const x = center.field("x").value + Math.cos(angle) * radius;
            const z = center.field("z").value + Math.sin(angle) * radius;
            const y = center.field("y").value + (spiralHeight + (i * 0.08)) % 8.0;
            
            try {
                const tf = obj.method("get_transform").invoke();
                tf.method("set_position").invoke([x, y, z]);
                
                const spinRot = Quaternion.method("Euler").invoke(0, spiralAngle * 180, 0);
                tf.method("set_rotation").invoke(spinRot);
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Creates 30 selling machines that spiral upward while spinning."
}),
    new ButtonInfo({
        buttonText: "Christmas Box Orbit",
        enableMethod: () => {
            if (orbitEnabled) {
                sendNotification("Turn OFF current orbit first!", false);
                return;
            }
            orbitEnabled = true;
            for (let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 / 8) * i;
                const headPos = getTransform(headCollider).method("get_position").invoke();
                const x = headPos.field("x").value + Math.cos(angle) * 3.0;
                const z = headPos.field("z").value + Math.sin(angle) * 3.0;
                const y = headPos.field("y").value + 1.0;
                const box = spawnNetworkPrefab("ChristmasBox", [x, y, z], identityQuaternion);
                if (box && !box.isNull()) {
                    orbitPrefabs.push(box);
                    orbiters.push({ obj: box, angle: angle });
                }
            }
            sendNotification(orbitPrefabs.length + " Christmas boxes orbiting!", false);
        },
        disableMethod: () => {
            orbitEnabled = false;
            cleanupOrbiters();
            sendNotification("Christmas boxes removed!", false);
        },
        method: () => { updateOrbit(); },
        isTogglable: true,
        toolTip: "Spawns REAL ChristmasBox prefabs that orbit around your head."
    }),

new ButtonInfo({
    buttonText: "Christmas Box Chain",
    enableMethod: () => {
        if (chainEnabled) return;
        chainEnabled = true;
        
        for (let i = 0; i < CHAIN_LENGTH; i++) {
            const box = spawnNetworkPrefab("ChristmasBox", [0, 0, 0], identityQuaternion);
            if (box && !box.isNull()) {
                chainObjects.push(box);
            }
        }
        
        sendNotification("Christmas Box Chain Spawned!", false);
    },
    disableMethod: () => {
        chainEnabled = false;
        for (let i = 0; i < chainObjects.length; i++) {
            const obj = chainObjects[i];
            if (obj && !obj.isNull()) {
                try {
                    const runner = obj.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(obj);
                    }
                } catch(e) {}
            }
        }
        chainObjects = [];
        sendNotification("Christmas Box Chain Removed", false);
    },
    method: () => {
        if (!chainEnabled) return;
        
        const handPos = rightHandTransform.method("get_position").invoke();
        const handForward = rightHandTransform.method("get_forward").invoke();
        const handRight = rightHandTransform.method("get_right").invoke();
        const handUp = rightHandTransform.method("get_up").invoke();
        
        for (let i = 0; i < chainObjects.length; i++) {
            const obj = chainObjects[i];
            if (!obj || obj.isNull()) continue;
            
            const forwardOffset = (i + 1) * CHAIN_SPACING;
            const offsetForward = Vector3.method("op_Multiply", 2).invoke(handForward, forwardOffset);
            
            const sideSway = Math.sin(i * 0.8) * 0.12;
            const upSway = Math.cos(i * 0.5) * 0.08;
            const offsetRight = Vector3.method("op_Multiply", 2).invoke(handRight, sideSway);
            const offsetUp = Vector3.method("op_Multiply", 2).invoke(handUp, upSway);
            
            const finalPos = Vector3.method("op_Addition").invoke(
                handPos,
                Vector3.method("op_Addition").invoke(
                    offsetForward,
                    Vector3.method("op_Addition").invoke(offsetRight, offsetUp)
                )
            );
            
            try {
                const tf = obj.method("get_transform").invoke();
                tf.method("set_position").invoke(finalPos);
                
                const lookRot = Quaternion.method("LookRotation", 1).invoke(handForward);
                tf.method("set_rotation").invoke(lookRot);
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Creates a chain of Christmas boxes extending outward from your hand, each one further away."
}),

 new ButtonInfo({
  buttonText: "ChristmasBox Dome self",
  method: () => {
    const center = AssemblyCSharp.class("AnimalCompany.PlayerController").method("get_instance").invoke().method("get_head").invoke();

    function spawnorbitobject() {
      orbiters = [];

      const rings = [
        { count: 1,  elevation:  Math.PI / 2,        radius: 0.0 }, // 
        { count: 8,  elevation:  Math.PI * 5 / 12,   radius: 1.5 }, // 
        { count: 14, elevation:  Math.PI / 3,        radius: 2.8 }, // 
        { count: 18, elevation:  Math.PI / 4,        radius: 3.5 }, // 
        { count: 22, elevation:  Math.PI / 6,        radius: 4.0 }, // 
        { count: 26, elevation:  Math.PI / 12,       radius: 4.3 }, // 
        { count: 26, elevation:  0,                  radius: 4.5 }, // 
        { count: 22, elevation: -Math.PI / 12,       radius: 4.3 }, // 
        { count: 18, elevation: -Math.PI / 6,        radius: 4.0 }, // 
        { count: 15, elevation: -Math.PI / 3,        radius: 2.8 }, // 
      ];

      for (const ring of rings) {
        for (let i = 0; i < ring.count; i++) {
          const angle = (Math.PI * 2 / Math.max(ring.count, 1)) * i;
          const x = Math.cos(angle) * ring.radius;
          const y = Math.sin(ring.elevation) * 4.5;
          const z = Math.sin(angle) * ring.radius;

          const offset = Vector3.alloc();
          offset.method(".ctor").overload("System.Single", "System.Single", "System.Single").invoke(x, y, z);

          let centerPos2 = center.method("get_position").invoke();
          let spawnPos = Vector3.method("op_Addition").invoke(centerPos2, [
            offset.field("x").value,
            offset.field("y").value,
            offset.field("z").value,
          ]);

          let no = spawnNetworkPrefab("ChristmasBox", spawnPos, Quaternion.method("get_identity").invoke());
          if (!no) continue;
          orbitprefabs.push(no);

          let go = no.method("get_gameObject").invoke();
          if (!go) continue;
          let tf = go.method("get_transform").invoke();

          orbiters.push({ transform: tf, angle, radius: ring.radius, elevation: ring.elevation });
        }
      }
    }

    if (orbitprefabs.length < 170) spawnorbitobject();

    let delta = Time.method("get_deltaTime").invoke();
    let centerPos = center.method("get_position").invoke();

    for (let orb of orbiters) {
      if (orb.radius > 0.01) orb.angle += 1.5 * delta;

      const x = Math.cos(orb.angle) * orb.radius;
      const y = Math.sin(orb.elevation) * 4.5;
      const z = Math.sin(orb.angle) * orb.radius;

      const offset = Vector3.alloc();
      offset.method(".ctor").overload("System.Single", "System.Single", "System.Single").invoke(x, y, z);

      let newPos = Vector3.method("op_Addition").invoke(centerPos, [
        offset.field("x").value,
        offset.field("y").value,
        offset.field("z").value,
      ]);

      orb.transform.method("set_position").invoke(newPos);
    }
  },
  disableMethod: () => {
    for (let i = 0; i < orbitprefabs.length; i++) {
      const prefab = orbitprefabs[i];
      if (!prefab) return;
      const runner = prefab.method("get_Runner").invoke();
      if (runner && !runner.isNull()) runner.method("Despawn").invoke(prefab);
    }
    orbitprefabs = [];
    orbiters = [];
  },
  isTogglable: true,
  toolTip: "Creates 170 XmasBoxes in a full sphere around you."
}),

new ButtonInfo({
    buttonText: "Selling Machine Orbit",
    enableMethod: () => {
        if (orbitEnabled) {
            sendNotification("Turn OFF current orbit first!", false);
            return;
        }
        orbitEnabled = true;
        for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 / 8) * i;
            const headPos = getTransform(headCollider).method("get_position").invoke();
            const x = headPos.field("x").value + Math.cos(angle) * 20.0;  
            const z = headPos.field("z").value + Math.sin(angle) * 20.0;  
            const y = headPos.field("y").value + 0.5;
            const machine = spawnNetworkPrefab("ItemSellingMachineController", [x, y, z], identityQuaternion);
            if (machine && !machine.isNull()) {
                orbitPrefabs.push(machine);
                orbiters.push({ obj: machine, angle: angle });
            }
        }
        sendNotification(orbitPrefabs.length + " Selling machines orbiting!", false);
    },
    disableMethod: () => {
        orbitEnabled = false;
        cleanupOrbiters();
        sendNotification("Selling machines removed!", false);
    },
    method: () => { updateOrbit(); },
    isTogglable: true,
    toolTip: "Spawns ItemSellingMachineController prefabs that orbit around your head."
}),

new ButtonInfo({
    buttonText: "Floating Selling Machine",
    enableMethod: () => {
        if (floatingMachineEnabled) return;
        floatingMachineEnabled = true;
        
        const spawnPos = rightHandTransform.method("get_position").invoke();
        const spawnPosAbove = Vector3.method("op_Addition").invoke(spawnPos, [0, 2, 0]);
        floatingMachine = spawnNetworkPrefab("ItemSellingMachineController", spawnPosAbove, identityQuaternion);
        
        if (floatingMachine && !floatingMachine.isNull()) {
            sendNotification("Floating Selling Machine Spawned!", false);
            floatingMachineState = "up";
            floatingMachineRotation = 0;
        } else {
            sendNotification("Failed to spawn! Join a lobby first.", false);
            floatingMachineEnabled = false;
        }
    },
    disableMethod: () => {
        floatingMachineEnabled = false;
        if (floatingMachine && !floatingMachine.isNull()) {
            try {
                const runner = floatingMachine.method("get_Runner").invoke();
                if (runner && !runner.isNull()) {
                    runner.method("Despawn").invoke(floatingMachine);
                }
            } catch(e) {}
            floatingMachine = null;
        }
        sendNotification("Floating Selling Machine Removed", false);
    },
    method: () => {
        if (!floatingMachineEnabled || !floatingMachine || floatingMachine.isNull()) return;
        
        try {
            const tf = floatingMachine.method("get_transform").invoke();
            const currentPos = tf.method("get_position").invoke();
            const up = Vector3.field("upVector").value;
            const speed = 1.5;
            const pauseDuration = 0.8;
            const maxHeight = 3.5;
            const minHeight = 0.5;
            
            const currentY = currentPos.field("y").value;
            const startY = currentPos.field("y").value - (floatingMachineState === "up" ? 0 : 0);
            
            if (floatingMachineState === "up") {
                let newY = currentY + (speed * deltaTime);
                if (newY >= maxHeight) {
                    newY = maxHeight;
                    floatingMachineState = "pauseUp";
                    floatingMachinePauseTimer = time + pauseDuration;
                }
                tf.method("set_position").invoke([currentPos.field("x").value, newY, currentPos.field("z").value]);
                
            } else if (floatingMachineState === "pauseUp") {
                if (time >= floatingMachinePauseTimer) {
                    floatingMachineState = "down";
                }
                
            } else if (floatingMachineState === "down") {
                let newY = currentY - (speed * deltaTime);
                if (newY <= minHeight) {
                    newY = minHeight;
                    floatingMachineState = "pauseDown";
                    floatingMachinePauseTimer = time + pauseDuration;
                }
                tf.method("set_position").invoke([currentPos.field("x").value, newY, currentPos.field("z").value]);
                
            } else if (floatingMachineState === "pauseDown") {
                if (time >= floatingMachinePauseTimer) {
                    floatingMachineState = "up";
                }
            }
            
            floatingMachineRotation += 30 * deltaTime;
            if (floatingMachineRotation > 360) floatingMachineRotation -= 360;
            const rotation = Quaternion.method("Euler").invoke(floatingMachineRotation, 0, 0);
            tf.method("set_rotation").invoke(rotation);
            
        } catch(e) {
            console.log("Floating machine error: " + e);
        }
    },
    isTogglable: true,
    toolTip: "Spawns a selling machine that floats up and down slowly while rotating."
}),

new ButtonInfo({
    buttonText: "Floating Christmas Box",
    enableMethod: () => {
        if (floatingChristmasEnabled) return;
        floatingChristmasEnabled = true;
        
        const spawnPos = rightHandTransform.method("get_position").invoke();
        const spawnPosAbove = Vector3.method("op_Addition").invoke(spawnPos, [0, 2, 0]);
        floatingChristmas = spawnNetworkPrefab("ChristmasBox", spawnPosAbove, identityQuaternion);
        
        if (floatingChristmas && !floatingChristmas.isNull()) {
            sendNotification("Floating Christmas Box Spawned!", false);
            floatingChristmasState = "up";
            floatingChristmasRotation = 0;
        } else {
            sendNotification("Failed to spawn! Join a lobby first.", false);
            floatingChristmasEnabled = false;
        }
    },
    disableMethod: () => {
        floatingChristmasEnabled = false;
        if (floatingChristmas && !floatingChristmas.isNull()) {
            try {
                const runner = floatingChristmas.method("get_Runner").invoke();
                if (runner && !runner.isNull()) {
                    runner.method("Despawn").invoke(floatingChristmas);
                }
            } catch(e) {}
            floatingChristmas = null;
        }
        sendNotification("Floating Christmas Box Removed", false);
    },
    method: () => {
        if (!floatingChristmasEnabled || !floatingChristmas || floatingChristmas.isNull()) return;
        
        try {
            const tf = floatingChristmas.method("get_transform").invoke();
            const currentPos = tf.method("get_position").invoke();
            const speed = 1.5;
            const pauseDuration = 0.8;
            const maxHeight = 3.5;
            const minHeight = 0.5;
            
            const currentY = currentPos.field("y").value;
            
            if (floatingChristmasState === "up") {
                let newY = currentY + (speed * deltaTime);
                if (newY >= maxHeight) {
                    newY = maxHeight;
                    floatingChristmasState = "pauseUp";
                    floatingChristmasPauseTimer = time + pauseDuration;
                }
                tf.method("set_position").invoke([currentPos.field("x").value, newY, currentPos.field("z").value]);
                
            } else if (floatingChristmasState === "pauseUp") {
                if (time >= floatingChristmasPauseTimer) {
                    floatingChristmasState = "down";
                }
                
            } else if (floatingChristmasState === "down") {
                let newY = currentY - (speed * deltaTime);
                if (newY <= minHeight) {
                    newY = minHeight;
                    floatingChristmasState = "pauseDown";
                    floatingChristmasPauseTimer = time + pauseDuration;
                }
                tf.method("set_position").invoke([currentPos.field("x").value, newY, currentPos.field("z").value]);
                
            } else if (floatingChristmasState === "pauseDown") {
                if (time >= floatingChristmasPauseTimer) {
                    floatingChristmasState = "up";
                }
            }
            
            floatingChristmasRotation += 45 * deltaTime;
            if (floatingChristmasRotation > 360) floatingChristmasRotation -= 360;
            const rotation = Quaternion.method("Euler").invoke(0, floatingChristmasRotation, 0);
            tf.method("set_rotation").invoke(rotation);
            
        } catch(e) {
            console.log("Floating Christmas error: " + e);
        }
    },
    isTogglable: true,
    toolTip: "Spawns a Christmas Box that floats up and down slowly while rotating."
}),

    new ButtonInfo({
        buttonText: "Custom Prefab Orbit: " + prefabList[prefabIndex].substring(0, 18),
        enableMethod: () => {
            if (orbitEnabled) {
                sendNotification("Turn OFF current orbit first!", false);
                return;
            }
            orbitEnabled = true;
            const prefabName = prefabList[prefabIndex];
            for (let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 / 8) * i;
                const headPos = getTransform(headCollider).method("get_position").invoke();
                const x = headPos.field("x").value + Math.cos(angle) * 3.0;
                const z = headPos.field("z").value + Math.sin(angle) * 3.0;
                const y = headPos.field("y").value + 1.0;
                const obj = spawnNetworkPrefab(prefabName, [x, y, z], identityQuaternion);
                if (obj && !obj.isNull()) {
                    orbitPrefabs.push(obj);
                    orbiters.push({ obj: obj, angle: angle });
                }
            }
            sendNotification(orbitPrefabs.length + " " + prefabName + " orbiting!", false);
        },
        disableMethod: () => {
            orbitEnabled = false;
            cleanupOrbiters();
            sendNotification("Custom prefabs removed!", false);
        },
        method: () => { updateOrbit(); },
        isTogglable: true,
        toolTip: "Spawns your selected prefab from the list around your head."
    }),

    
    new ButtonInfo({
        buttonText: "Change Custom Prefab Orbit +",
        method: () => {
            prefabIndex++;
            prefabIndex = ((prefabIndex % prefabList.length) + prefabList.length) % prefabList.length;
            sendNotification("Custom Prefab: " + prefabList[prefabIndex], false);
            reloadMenu();
        },
        isTogglable: false,
        toolTip: "Goes forward through the prefab list for Custom Prefab Orbit."
    }),

    new ButtonInfo({
        buttonText: "Change Custom Prefab Orbit -",
        method: () => {
            prefabIndex--;
            prefabIndex = ((prefabIndex % prefabList.length) + prefabList.length) % prefabList.length;
            sendNotification("Custom Prefab: " + prefabList[prefabIndex], false);
            reloadMenu();
        },
        isTogglable: false,
        toolTip: "Goes backward through the prefab list for Custom Prefab Orbit."
            }),

        new ButtonInfo({
        buttonText: "ChristmasBox Hand Follow",
        enableMethod: () => {
            followedPrefabObject = null;
            followedPrefabName = "";
        },
        disableMethod: () => {
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                try {
                    const runner = followedPrefabObject.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(followedPrefabObject);
                    }
                } catch(e) {}
                followedPrefabObject = null;
            }
            followedPrefabName = "";
        },
        method: () => {
            const name = "ChristmasBox";
            const zOffset = 1.25;
            
            if (!followedPrefabObject || followedPrefabObject.isNull() || followedPrefabName !== name) {
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    try {
                        const runner = followedPrefabObject.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(followedPrefabObject);
                        }
                    } catch(e) {}
                }
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                followedPrefabObject = spawnNetworkPrefab(name, finalPos, rightHandTransform.method("get_rotation").invoke());
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    followedPrefabName = name;
                }
            }
            
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                const tf = followedPrefabObject.method("get_transform").invoke();
                tf.method("set_position").invoke(finalPos);
                tf.method("set_rotation").invoke(rightHandTransform.method("get_rotation").invoke());
            }
        },
        isTogglable: true,
        toolTip: "Keeps a ChristmasBox prefab synced to your right hand (1.25 offset)."
    }),

    new ButtonInfo({
    buttonText: "Spawn ThunderController (lightning sounds)",
    enableMethod: () => {
        if (thunderEnabled) return;
        thunderEnabled = true;
        
        const spawnPos = getTransform(headCollider).method("get_position").invoke();
        
        thunderObject = spawnNetworkPrefab("ThunderController", spawnPos, identityQuaternion);
        
        if (thunderObject && !thunderObject.isNull()) {
            sendNotification("ThunderController Spawned!", false);
        } else {
            sendNotification("Failed to spawn! Join a lobby first.", false);
            thunderEnabled = false;
        }
    },
    disableMethod: () => {
        thunderEnabled = false;
        if (thunderObject && !thunderObject.isNull()) {
            try {
                const runner = thunderObject.method("get_Runner").invoke();
                if (runner && !runner.isNull()) {
                    runner.method("Despawn").invoke(thunderObject);
                }
            } catch(e) {}
            thunderObject = null;
        }
        sendNotification("ThunderController Removed", false);
    },
    isTogglable: true,
    toolTip: "Spawns ThunderController at your position. Does not follow you."
}),
    
    new ButtonInfo({
        buttonText: "Vehicle Buggy Hand Follow",
        enableMethod: () => {
            followedPrefabObject = null;
            followedPrefabName = "";
        },
        disableMethod: () => {
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                try {
                    const runner = followedPrefabObject.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(followedPrefabObject);
                    }
                } catch(e) {}
                followedPrefabObject = null;
            }
            followedPrefabName = "";
        },
        method: () => {
            const name = "Vehicle_Buggy";
            const zOffset = 1.50;
            
            if (!followedPrefabObject || followedPrefabObject.isNull() || followedPrefabName !== name) {
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    try {
                        const runner = followedPrefabObject.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(followedPrefabObject);
                        }
                    } catch(e) {}
                }
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                followedPrefabObject = spawnNetworkPrefab(name, finalPos, rightHandTransform.method("get_rotation").invoke());
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    followedPrefabName = name;
                }
            }
            
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                const tf = followedPrefabObject.method("get_transform").invoke();
                tf.method("set_position").invoke(finalPos);
                tf.method("set_rotation").invoke(rightHandTransform.method("get_rotation").invoke());
            }
        },
        isTogglable: true,
        toolTip: "Keeps a Vehicle_Buggy prefab synced to your right hand (1.50 offset)."
    }),
    
    new ButtonInfo({
        buttonText: "Selling Machine Hand Follow",
        enableMethod: () => {
            followedPrefabObject = null;
            followedPrefabName = "";
        },
        disableMethod: () => {
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                try {
                    const runner = followedPrefabObject.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(followedPrefabObject);
                    }
                } catch(e) {}
                followedPrefabObject = null;
            }
            followedPrefabName = "";
        },
        method: () => {
            const name = "ItemSellingMachineController";
            const zOffset = 2.00;
            
            if (!followedPrefabObject || followedPrefabObject.isNull() || followedPrefabName !== name) {
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    try {
                        const runner = followedPrefabObject.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(followedPrefabObject);
                        }
                    } catch(e) {}
                }
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                followedPrefabObject = spawnNetworkPrefab(name, finalPos, rightHandTransform.method("get_rotation").invoke());
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    followedPrefabName = name;
                }
            }
            
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                const tf = followedPrefabObject.method("get_transform").invoke();
                tf.method("set_position").invoke(finalPos);
                tf.method("set_rotation").invoke(rightHandTransform.method("get_rotation").invoke());
            }
        },
        isTogglable: true,
        toolTip: "Keeps an ItemSellingMachineController prefab synced to your right hand (2.00 offset)."
    }),

    
    
    new ButtonInfo({
        buttonText: "GiantRock Hand Follow",
        enableMethod: () => {
            followedPrefabObject = null;
            followedPrefabName = "";
        },
        disableMethod: () => {
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                try {
                    const runner = followedPrefabObject.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(followedPrefabObject);
                    }
                } catch(e) {}
                followedPrefabObject = null;
            }
            followedPrefabName = "";
        },
        method: () => {
            const name = "GiantRockObject";
            const zOffset = 1.50;
            
            if (!followedPrefabObject || followedPrefabObject.isNull() || followedPrefabName !== name) {
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    try {
                        const runner = followedPrefabObject.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(followedPrefabObject);
                        }
                    } catch(e) {}
                }
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                followedPrefabObject = spawnNetworkPrefab(name, finalPos, rightHandTransform.method("get_rotation").invoke());
                if (followedPrefabObject && !followedPrefabObject.isNull()) {
                    followedPrefabName = name;
                }
            }
            
            if (followedPrefabObject && !followedPrefabObject.isNull()) {
                const spawnPos = rightHandTransform.method("get_position").invoke();
                const handForward = rightHandTransform.method("get_forward").invoke();
                const offset = Vector3.method("op_Multiply", 2).invoke(handForward, zOffset);
                const finalPos = Vector3.method("op_Addition", 2).invoke(spawnPos, offset);
                const tf = followedPrefabObject.method("get_transform").invoke();
                tf.method("set_position").invoke(finalPos);
                tf.method("set_rotation").invoke(rightHandTransform.method("get_rotation").invoke());
            }
        },
        isTogglable: true,
        toolTip: "Keeps a GiantRockObject prefab synced to your right hand (1.50 offset)."
    }),
    
new ButtonInfo({
    buttonText: "Delete ALL Prefabs",
    method: () => {
        let count = 0;
        try {
            const NOClass = Il2Cpp.domain.assembly("Fusion.Runtime").image.class("Fusion.NetworkObject");
            const allNetObjs = Object.method("FindObjectsByType", 1).inflate(NOClass).invoke(0);
            
            for (let i = 0; i < allNetObjs.length; i++) {
                const netObj = allNetObjs.get(i);
                if (!netObj || netObj.isNull()) continue;
                
                try {
                    const go = netObj.method("get_gameObject").invoke();
                    const name = go.method("get_name").invoke().toString().toLowerCase();
                    
                    if (name.includes("netplayer") || name.includes("watch") || name.includes("rig") || name.includes("player")) {
                        continue;
                    }
                    
                    const runner = netObj.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(netObj);
                        count++;
                    }
                } catch(e) {}
            }
            
            orbitPrefabs = [];
            orbiters = [];
            
            sendNotification("Deleted " + count + " prefabs from the game!", false);
        } catch(e) {
            console.log("Delete prefabs error: " + e);
            sendNotification("Error deleting prefabs", false);
        }
    },
    isTogglable: false,
    toolTip: "Deletes EVERY spawned prefab in the game world (players are safe)."
}),
      new ButtonInfo({
        buttonText: "Orbit Players",
        enableMethod: () => {
            playerOrbitEnabled = true;
            sendNotification("Orbit Players ON - Others will circle you!", false);
        },
        disableMethod: () => {
            playerOrbitEnabled = false;
            sendNotification("Orbit Players OFF", false);
        },
        method: () => {
            if (!playerOrbitEnabled) return;
            if (frameCount % 2 !== 0) return; 
            
            try {
                const myPos = getTransform(headCollider).method("get_position").invoke();
                const allNetPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                
                const otherPlayers = [];
                for (let i = 0; i < allNetPlayers.length; i++) {
                    const p = allNetPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        otherPlayers.push(p);
                    }
                }
                
                if (otherPlayers.length === 0) return;
                
                for (let i = 0; i < otherPlayers.length; i++) {
                    const target = otherPlayers[i];
                    const angle = (time * 1.5) + (i * (Math.PI * 2 / otherPlayers.length));
                    const radius = 4.0;
                    
                    const x = myPos.field("x").value + Math.cos(angle) * radius;
                    const z = myPos.field("z").value + Math.sin(angle) * radius;
                    const y = myPos.field("y").value + 0.5;
                    
                    try {
                        target.method("RPC_Teleport").invoke([x, y, z]);
                    } catch(e) {}
                }
            } catch(e) {
                console.log("Orbit Players error: " + e);
            }
        },
        isTogglable: true,
        toolTip: "Forces all other players to orbit around you!"
    }),

new ButtonInfo({
    buttonText: "Spawn Giant Christmas Box",
    enableMethod: () => {
        if (giantChristmasEnabled) return;
        giantChristmasEnabled = true;
        
        const pos = rightHandTransform.method("get_position").invoke();
        giantChristmas = spawnNetworkPrefab("ChristmasBox", pos, identityQuaternion);
        
        if (giantChristmas && !giantChristmas.isNull()) {
            const tf = giantChristmas.method("get_transform").invoke();
            tf.method("set_localScale").invoke([giantChristmasSize, giantChristmasSize, giantChristmasSize]);
            sendNotification("Giant Christmas Box Spawned! Size: " + giantChristmasSize, false);
        } else {
            sendNotification("Failed to spawn!", false);
            giantChristmasEnabled = false;
        }
    },
    disableMethod: () => {
        giantChristmasEnabled = false;
        if (giantChristmas && !giantChristmas.isNull()) {
            try {
                const runner = giantChristmas.method("get_Runner").invoke();
                if (runner && !runner.isNull()) runner.method("Despawn").invoke(giantChristmas);
            } catch(e) {}
            giantChristmas = null;
        }
        sendNotification("Giant Christmas Box Removed", false);
    },
    isTogglable: true,
    toolTip: "Spawns a giant Christmas box that you can resize."
}),

new ButtonInfo({
    buttonText: "Christmas Size +",
    method: () => {
        if (!giantChristmasEnabled || !giantChristmas || giantChristmas.isNull()) {
            sendNotification("Spawn the Giant Christmas Box first!", false);
            return;
        }
        giantChristmasSize += 0.5;
        if (giantChristmasSize > 10) giantChristmasSize = 10;
        
        const tf = giantChristmas.method("get_transform").invoke();
        tf.method("set_localScale").invoke([giantChristmasSize, giantChristmasSize, giantChristmasSize]);
        
        const netObj = giantChristmas.method("get_Object").invoke();
        if (netObj && !netObj.isNull()) {
            netObj.method("RequestStateAuthority").invoke();
        }
        
        sendNotification("Christmas Box Size: " + giantChristmasSize, false);
    },
    isTogglable: false,
    toolTip: "Increases the size of the spawned Christmas box."
}),

new ButtonInfo({
    buttonText: "Christmas Size -",
    method: () => {
        if (!giantChristmasEnabled || !giantChristmas || giantChristmas.isNull()) {
            sendNotification("Spawn the Giant Christmas Box first!", false);
            return;
        }
        giantChristmasSize -= 0.5;
        if (giantChristmasSize < 0.5) giantChristmasSize = 0.5;
        
        const tf = giantChristmas.method("get_transform").invoke();
        tf.method("set_localScale").invoke([giantChristmasSize, giantChristmasSize, giantChristmasSize]);
        
        const netObj = giantChristmas.method("get_Object").invoke();
        if (netObj && !netObj.isNull()) {
            netObj.method("RequestStateAuthority").invoke();
        }
        
        sendNotification("Christmas Box Size: " + giantChristmasSize, false);
    },
    isTogglable: false,
    toolTip: "Decreases the size of the spawned Christmas box."
}),

new ButtonInfo({
    buttonText: "Spawn Giant Selling Machine",
    enableMethod: () => {
        if (giantMachineEnabled) return;
        giantMachineEnabled = true;
        
        const pos = rightHandTransform.method("get_position").invoke();
        giantMachine = spawnNetworkPrefab("ItemSellingMachineController", pos, identityQuaternion);
        
        if (giantMachine && !giantMachine.isNull()) {
            const tf = giantMachine.method("get_transform").invoke();
            tf.method("set_localScale").invoke([giantMachineSize, giantMachineSize, giantMachineSize]);
            sendNotification("Giant Selling Machine Spawned! Size: " + giantMachineSize, false);
        } else {
            sendNotification("Failed to spawn!", false);
            giantMachineEnabled = false;
        }
    },
    disableMethod: () => {
        giantMachineEnabled = false;
        if (giantMachine && !giantMachine.isNull()) {
            try {
                const runner = giantMachine.method("get_Runner").invoke();
                if (runner && !runner.isNull()) runner.method("Despawn").invoke(giantMachine);
            } catch(e) {}
            giantMachine = null;
        }
        sendNotification("Giant Selling Machine Removed", false);
    },
    isTogglable: true,
    toolTip: "Spawns a giant selling machine that you can resize."
}),

new ButtonInfo({
    buttonText: "Machine Size +",
    method: () => {
        if (!giantMachineEnabled || !giantMachine || giantMachine.isNull()) {
            sendNotification("Spawn the Giant Selling Machine first!", false);
            return;
        }
        giantMachineSize += 0.5;
        if (giantMachineSize > 10) giantMachineSize = 10;
        
        const tf = giantMachine.method("get_transform").invoke();
        tf.method("set_localScale").invoke([giantMachineSize, giantMachineSize, giantMachineSize]);
        
        const netObj = giantMachine.method("get_Object").invoke();
        if (netObj && !netObj.isNull()) {
            netObj.method("RequestStateAuthority").invoke();
        }
        
        sendNotification("Machine Size: " + giantMachineSize, false);
    },
    isTogglable: false,
    toolTip: "Increases the size of the spawned selling machine."
}),

new ButtonInfo({
    buttonText: "Machine Size -",
    method: () => {
        if (!giantMachineEnabled || !giantMachine || giantMachine.isNull()) {
            sendNotification("Spawn the Giant Selling Machine first!", false);
            return;
        }
        giantMachineSize -= 0.5;
        if (giantMachineSize < 0.5) giantMachineSize = 0.5;
        
        const tf = giantMachine.method("get_transform").invoke();
        tf.method("set_localScale").invoke([giantMachineSize, giantMachineSize, giantMachineSize]);
        
        const netObj = giantMachine.method("get_Object").invoke();
        if (netObj && !netObj.isNull()) {
            netObj.method("RequestStateAuthority").invoke();
        }
        
        sendNotification("Machine Size: " + giantMachineSize, false);
    },
    isTogglable: false,
    toolTip: "Decreases the size of the spawned selling machine."
}),
            
 ],
    
// ── [8] Item/Beta Mods ──────────────────────────────────────────────────────────
[
     new ButtonInfo({
        buttonText: "Back to Main",
        method: () => { currentCategory = 0; currentPage = 0; },
        isTogglable: false,
        toolTip: "Returns to main category."
    }),
    new ButtonInfo({
    buttonText: "Big Size Gun",
    enableMethod: () => { sizeGunBigEnabled = true; sizeGunSmallEnabled = false; },
    disableMethod: () => { sizeGunBigEnabled = false; },
    method: () => {
        if (!sizeGunBigEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < lastSizeGunTime) return;
        lastSizeGunTime = time + 0.3;
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                try { closestPlayer.method("set_playerScale").invoke(5.0); } catch(e) {}
                try { closestPlayer.field("_playerScale").value = 5.0; } catch(e) {}
                sendNotification("Player scaled BIG!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to make them BIG."
}),

new ButtonInfo({
    buttonText: "Get Game API",
    isTogglable: false,
    toolTip: "Fetches and displays the game's API information.",
    method: () => {
        try {
            const gameManager = AssemblyCSharp.class("AnimalCompany.GameManager");
            const app = AssemblyCSharp.class("AnimalCompany.App");
            const appState = app.method("get_state").invoke();
            const userState = appState.method("get_user").invoke();
            const inventory = userState.method("get_inventory").invoke();
            
            let apiData = "";
            let logData = "";
            let hasData = false;
            
            try {
                const serverUrl = gameManager.field("_serverUrl").value;
                if (serverUrl) {
                    const val = serverUrl.toString();
                    apiData += "Server URL: " + val + "\n";
                    logData += "Server URL: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const apiVersion = gameManager.field("_apiVersion").value;
                if (apiVersion) {
                    const val = apiVersion.toString();
                    apiData += "API Version: " + val + "\n";
                    logData += "API Version: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const gameVersion = app.field("_gameVersion").value;
                if (gameVersion) {
                    const val = gameVersion.toString();
                    apiData += "Game Version: " + val + "\n";
                    logData += "Game Version: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const userId = userState.field("_userID").value;
                if (userId) {
                    const val = userId.toString();
                    apiData += "User ID: " + val + "\n";
                    logData += "User ID: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const userName = userState.method("get_displayName").invoke();
                if (userName && !userName.isNull()) {
                    const val = userName.toString();
                    apiData += "User Name: " + val + "\n";
                    logData += "User Name: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const isDev = userState.method("get_isDeveloper").invoke();
                if (isDev !== undefined) {
                    const val = isDev ? "Yes" : "No";
                    apiData += "Is Developer: " + val + "\n";
                    logData += "Is Developer: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const money = userState.method("get_money").invoke();
                if (money !== undefined) {
                    const val = money.toString();
                    apiData += "Money: " + val + "\n";
                    logData += "Money: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const totalMoney = userState.method("get_totalMoneyEarned").invoke();
                if (totalMoney !== undefined) {
                    const val = totalMoney.toString();
                    apiData += "Total Money Earned: " + val + "\n";
                    logData += "Total Money Earned: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const roomId = gameManager.field("_roomId").value;
                if (roomId) {
                    const val = roomId.toString();
                    apiData += "Room ID: " + val + "\n";
                    logData += "Room ID: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const playerCount = gameManager.field("_playerCount").value;
                if (playerCount !== undefined) {
                    const val = playerCount.toString();
                    apiData += "Player Count: " + val + "\n";
                    logData += "Player Count: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const maxPlayers = gameManager.field("_maxPlayers").value;
                if (maxPlayers !== undefined) {
                    const val = maxPlayers.toString();
                    apiData += "Max Players: " + val + "\n";
                    logData += "Max Players: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const sessionId = gameManager.field("_sessionId").value;
                if (sessionId) {
                    const val = sessionId.toString();
                    apiData += "Session ID: " + val + "\n";
                    logData += "Session ID: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const mapId = gameManager.field("_mapId").value;
                if (mapId) {
                    const val = mapId.toString();
                    apiData += "Map ID: " + val + "\n";
                    logData += "Map ID: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const mapName = gameManager.field("_mapName").value;
                if (mapName) {
                    const val = mapName.toString();
                    apiData += "Map Name: " + val + "\n";
                    logData += "Map Name: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const apiKey = gameManager.field("_apiKey").value;
                if (apiKey) {
                    const val = apiKey.toString();
                    apiData += "API Key: " + val + "\n";
                    logData += "API Key: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const authToken = gameManager.field("_authToken").value;
                if (authToken) {
                    const val = authToken.toString();
                    apiData += "Auth Token: " + val + "\n";
                    logData += "Auth Token: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const platform = gameManager.field("_platform").value;
                if (platform) {
                    const val = platform.toString();
                    apiData += "Platform: " + val + "\n";
                    logData += "Platform: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const region = gameManager.field("_region").value;
                if (region) {
                    const val = region.toString();
                    apiData += "Region: " + val + "\n";
                    logData += "Region: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const ping = gameManager.field("_ping").value;
                if (ping !== undefined) {
                    const val = ping.toString();
                    apiData += "Ping: " + val + "ms\n";
                    logData += "Ping: " + val + "ms\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const isConnected = gameManager.field("_isConnected").value;
                if (isConnected !== undefined) {
                    const val = isConnected ? "Yes" : "No";
                    apiData += "Connected: " + val + "\n";
                    logData += "Connected: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const inventoryCount = inventory.method("get_Count").invoke();
                if (inventoryCount !== undefined) {
                    const val = inventoryCount.toString();
                    apiData += "Inventory Items: " + val + "\n";
                    logData += "Inventory Items: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const avatarId = userState.field("_avatarId").value;
                if (avatarId) {
                    const val = avatarId.toString();
                    apiData += "Avatar ID: " + val + "\n";
                    logData += "Avatar ID: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const level = userState.field("_level").value;
                if (level !== undefined) {
                    const val = level.toString();
                    apiData += "Level: " + val + "\n";
                    logData += "Level: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const xp = userState.field("_xp").value;
                if (xp !== undefined) {
                    const val = xp.toString();
                    apiData += "XP: " + val + "\n";
                    logData += "XP: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            try {
                const nextLevelXp = userState.field("_nextLevelXp").value;
                if (nextLevelXp !== undefined) {
                    const val = nextLevelXp.toString();
                    apiData += "Next Level XP: " + val + "\n";
                    logData += "Next Level XP: " + val + "\n";
                    hasData = true;
                }
            } catch(e) {}
            
            if (!hasData) {
                sendNotification("No API data available", false, 5);
                console.log("No API data available");
                return;
            }
            
            console.log(logData);
            sendNotification(apiData, false, 10);
            
        } catch(e) {
            sendNotification("Get API failed: " + e, false);
            console.log("API Error: " + e);
        }
    }
}),

new ButtonInfo({
    buttonText: "Fetch Game API",
    isTogglable: false,
    toolTip: "Fetches data from the game's API endpoint.",
    method: () => {
        try {
            const gameManager = AssemblyCSharp.class("AnimalCompany.GameManager");
            const app = AssemblyCSharp.class("AnimalCompany.App");
            const appState = app.method("get_state").invoke();
            const userState = appState.method("get_user").invoke();
            
            const userId = userState.field("_userID").value;
            const roomId = gameManager.field("_roomId").value;
            const apiUrl = "https://api.animalcompany.com/v1/player/" + userId.toString();
            
            const webRequest = UnityEngineCore.class("UnityEngine.Networking.UnityWebRequest");
            const request = webRequest.method("Get", 1).invoke(Il2Cpp.string(apiUrl));
            
            const operation = request.method("SendWebRequest").invoke();
            
            operation.method("add_completed", 1).invoke(function() {
                try {
                    if (request.method("get_result").invoke() === 0) {
                        const response = request.method("get_downloadHandler").invoke().method("get_text").invoke();
                        const json = JSON.parse(response.toString());
                        const formatted = JSON.stringify(json, null, 2);
                        console.log("API Response:\n" + formatted);
                        sendNotification("API data logged to console", false, 5);
                    } else {
                        const error = request.method("get_error").invoke();
                        sendNotification("API request failed: " + error.toString(), false);
                        console.log("API Request Error: " + error.toString());
                    }
                } catch(e) {
                    sendNotification("API parse failed: " + e, false);
                    console.log("API Parse Error: " + e);
                }
            });
            
            sendNotification("Fetching API data...", false, 3);
        } catch(e) {
            sendNotification("Fetch API failed: " + e, false);
            console.log("Fetch API Error: " + e);
        }
    }
}),

new ButtonInfo({
    buttonText: "Get API Key",
    isTogglable: false,
    toolTip: "Retrieves the game's API key.",
    method: () => {
        try {
            const gameManager = AssemblyCSharp.class("AnimalCompany.GameManager");
            let apiKey = "";
            let logData = "";
            
            try {
                const key = gameManager.field("_apiKey").value;
                if (key) {
                    const val = key.toString();
                    apiKey += "API Key: " + val + "\n";
                    logData += "API Key: " + val + "\n";
                }
            } catch(e) {}
            
            try {
                const key2 = gameManager.field("_apiSecret").value;
                if (key2) {
                    const val = key2.toString();
                    apiKey += "API Secret: " + val + "\n";
                    logData += "API Secret: " + val + "\n";
                }
            } catch(e) {}
            
            try {
                const auth = gameManager.field("_authToken").value;
                if (auth) {
                    const val = auth.toString();
                    apiKey += "Auth Token: " + val + "\n";
                    logData += "Auth Token: " + val + "\n";
                }
            } catch(e) {}
            
            try {
                const app = AssemblyCSharp.class("AnimalCompany.App");
                const appState = app.method("get_state").invoke();
                const userState = appState.method("get_user").invoke();
                const userId = userState.field("_userID").value;
                if (userId) {
                    const val = userId.toString();
                    apiKey += "User ID: " + val + "\n";
                    logData += "User ID: " + val + "\n";
                }
            } catch(e) {}
            
            if (apiKey.length === 0) {
                sendNotification("No API key found", false, 5);
                console.log("No API key found");
                return;
            }
            
            console.log(logData);
            sendNotification(apiKey, false, 8);
        } catch(e) {
            sendNotification("Get API Key failed: " + e, false);
            console.log("API Key Error: " + e);
        }
    }
}),

new ButtonInfo({
    buttonText: "Small Size Gun",
    enableMethod: () => { sizeGunSmallEnabled = true; sizeGunBigEnabled = false; },
    disableMethod: () => { sizeGunSmallEnabled = false; },
    method: () => {
        if (!sizeGunSmallEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < lastSizeGunTime) return;
        lastSizeGunTime = time + 0.3;
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                try { closestPlayer.method("set_playerScale").invoke(0.3); } catch(e) {}
                try { closestPlayer.field("_playerScale").value = 0.3; } catch(e) {}
                sendNotification("Player scaled SMALL!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to make them SMALL."
}),

new ButtonInfo({
    buttonText: "Big All Players",
    method: () => {
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let count = 0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                try { p.method("set_playerScale").invoke(5.0); } catch(e) {}
                try { p.field("_playerScale").value = 5.0; } catch(e) {}
                count++;
            }
            sendNotification("Scaled " + count + " players BIG!", false);
        } catch(e) {}
    },
    isTogglable: false,
    toolTip: "Makes all other players BIG."
}),

new ButtonInfo({
    buttonText: "Small All Players",
    method: () => {
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let count = 0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                try { p.method("set_playerScale").invoke(0.3); } catch(e) {}
                try { p.field("_playerScale").value = 0.3; } catch(e) {}
                count++;
            }
            sendNotification("Scaled " + count + " players SMALL!", false);
        } catch(e) {}
    },
    isTogglable: false,
    toolTip: "Makes all other players SMALL."
}),

new ButtonInfo({
    buttonText: "Make Me BIG",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (player && !player.isNull()) {
                try { player.method("set_playerScale").invoke(5.0); } catch(e) {}
                try { player.field("_playerScale").value = 5.0; } catch(e) {}
                sendNotification("You are now BIG!", false);
            }
        } catch(e) {}
    },
    isTogglable: false,
    toolTip: "Makes you BIG."
}),

new ButtonInfo({
    buttonText: "Make Me SMALL",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (player && !player.isNull()) {
                try { player.method("set_playerScale").invoke(0.3); } catch(e) {}
                try { player.field("_playerScale").value = 0.3; } catch(e) {}
                sendNotification("You are now SMALL!", false);
            }
        } catch(e) {}
    },
    isTogglable: false,
    toolTip: "Makes you SMALL."
}),


new ButtonInfo({
    buttonText: "Prefab Gun",
    enableMethod: () => { prefabGunEnabled = true; mobGunEnabled = false; spawnGunEnabled = false; },
    disableMethod: () => { prefabGunEnabled = false; },
    method: () => {
        if (!prefabGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < lastGunTime) return;
        lastGunTime = time + 0.3;
        try {
            const hitPoint = gunData.endPosition;
            const prefabName = prefabList[prefabIndex];
            const result = spawnNetworkPrefab(prefabName, hitPoint, identityQuaternion);
            if (!result || result.isNull()) {
                sendNotification("Prefab spawn failed: " + prefabName, false);
            } else {
                sendNotification("Spawned prefab: " + prefabName, false);
            }
        } catch(e) {
            sendNotification("Prefab gun error: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim laser, pull trigger to spawn selected prefab at laser dot."
}),

new ButtonInfo({
    buttonText: "Spawn Gun",
    enableMethod: () => { spawnGunEnabled = true; prefabGunEnabled = false; },
    disableMethod: () => { spawnGunEnabled = false; },
    method: () => {
        if (!spawnGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        try {
            const hitPoint = gunData.endPosition;
            const result = spawnItemAtPos(itemIDs[itemIndex], hitPoint, identityQuaternion);
            if (!result || result.handle.isNull()) {
                sendNotification("Spawn failed: " + itemIDs[itemIndex], false);
            } else {
                sendNotification("Spawned: " + itemIDs[itemIndex], false);
            }
        } catch(e) {
            sendNotification("Spawn gun error: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to spawn selected item at laser dot."
}),

 new ButtonInfo({
    buttonText: "Delete ALL Items",
    method: () => {
        let count = 0;
        try {
            const allItems = Object.method("FindObjectsByType", 1).inflate(GBOClass).invoke(0);
            
            for (let i = 0; i < allItems.length; i++) {
                const item = allItems.get(i);
                if (!item || item.isNull()) continue;
                
                try {
                    const netObj = item.method("get_Object").invoke();
                    if (netObj && !netObj.isNull()) {
                        const runner = netObj.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(netObj);
                            count++;
                        }
                    }
                } catch(e) {}
            }
            
            sendNotification("Deleted " + count + " items from the game!", false);
        } catch(e) {
            console.log("Delete all items error: " + e);
            sendNotification("Error deleting items", false);
        }
    },
    isTogglable: false,
    toolTip: "Deletes EVERY GrabbableObject item in the game world."
}),

new ButtonInfo({
    buttonText: "Rainbow All Players",
    method: () => {
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let count = 0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (p && !p.isNull() && !playerIsLocal(p)) {
                    const randomHue = Math.random();
                    p.method("RPC_SetColorHSV").invoke(5.0, randomHue, 1.0, 1.0);
                    count++;
                }
            }
            sendNotification("Rainbowed " + count + " players!", false);
        } catch(e) {}
    },
    isTogglable: false,
    toolTip: "Changes all other players to random colors."
}),

new ButtonInfo({
    buttonText: "Spam Rainbow All",
    enableMethod: () => {
        spamRainbowAllEnabled = true;
        sendNotification("Spam Rainbow ON - All players flashing!", false);
    },
    disableMethod: () => {
        spamRainbowAllEnabled = false;
        sendNotification("Spam Rainbow OFF", false);
    },
    method: () => {
        if (!spamRainbowAllEnabled) return;
        if (frameCount % 10 !== 0) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (p && !p.isNull() && !playerIsLocal(p)) {
                    const randomHue = Math.random();
                    p.method("RPC_SetColorHSV").invoke(0.2, randomHue, 1.0, 1.0);
                }
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Continuously flashes random colors on all other players."
}),

new ButtonInfo({
    buttonText: "Custom hue Held Item",
    method: () => {
        try {
            const grabbable = getHeldGrabbable();
            if (!grabbable || grabbable.isNull?.()) return;
            if (rightTrigger) {
                hueValue++;
                if (hueValue > 127) hueValue = -127;
            }
            if (rightGrab) {
                hueValue--;
                if (hueValue < -127) hueValue = 127;
            }
            grabbable.method("set_colorHue").invoke(hueValue);
            sendNotification("Hue: " + hueValue, false);
        } catch(e) {
            console.error(e);
        }
    },
    isTogglable: true,
    toolTip: "Hold Trigger to increase hue, Grip to decrease."
}),

new ButtonInfo({
    buttonText: "Custom saturation Held Item",
    method: () => {
        try {
            const grabbable = getHeldGrabbable();
            if (!grabbable || grabbable.isNull?.()) return;
            if (rightTrigger) {
                satValue++;
                if (satValue > 127) satValue = -127;
            }
            if (rightGrab) {
                satValue--;
                if (satValue < -127) satValue = 127;
            }
            grabbable.method("set_colorSaturation").invoke(satValue);
            sendNotification("Saturation: " + satValue, false);
        } catch(e) {
            console.error(e);
        }
    },
    isTogglable: true,
    toolTip: "Hold Trigger to increase saturation, Grip to decrease."
}),

new ButtonInfo({
    buttonText: "Custom Scale Held Item",
    method: () => {
        try {
            const grabbable = getHeldGrabbable();
            if (!grabbable || grabbable.isNull?.()) return;
            if (rightTrigger) {
                scaleValue++;
                if (scaleValue > 127) scaleValue = -127;
            }
            if (rightGrab) {
                scaleValue--;
                if (scaleValue < -127) scaleValue = 127;
            }
            grabbable.method("set_scaleModifier").invoke(scaleValue);
            sendNotification("Size: " + scaleValue, false);
        } catch(e) {
            console.error(e);
        }
    },
    isTogglable: true,
    toolTip: "Hold Trigger to increase size, Grip to decrease."
}),

new ButtonInfo({
    buttonText: "randomize Held Item",
    method: () => {
        try {
            const grabbable = getHeldGrabbable();
            if (!grabbable || grabbable.isNull?.()) return;
            hueValue++;
            satValue++;
            scaleValue++;
            if (hueValue > 127) hueValue = -127;
            if (satValue > 127) satValue = -127;
            if (scaleValue > 127) scaleValue = -127;
            grabbable.method("set_colorHue").invoke(hueValue);
            grabbable.method("set_colorSaturation").invoke(satValue);
            grabbable.method("set_scaleModifier").invoke(scaleValue);
            sendNotification("Item randomized!", false);
        } catch(e) {
            console.error(e);
        }
    },
    isTogglable: false,
    toolTip: "Randomizes hue, saturation, and size of held item."
}),

new ButtonInfo({
    buttonText: "Kamehameha (Blue Bags)",
    enableMethod: () => { kamehamehaEnabled = true; },
    disableMethod: () => { kamehamehaEnabled = false; },
    method: () => {
        if (!kamehamehaEnabled) return;
        if (rightTrigger && time > lastKameTime) {
            lastKameTime = time + 0.03; 
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const forward = rightHandTransform.method("get_forward").invoke();
                const rot = Quaternion.method("LookRotation", 1).invoke(forward);
                
                const result = spawnItemAtPos("item_backpack_large_base", pos, rot);
                if (result && !result.isNull()) {
                    const rb = result.method("GetComponent", 1).inflate(Rigidbody).invoke();
                    if (rb && !rb.isNull()) {
                        rb.method("set_isKinematic").invoke(false);
                        const velocity = Vector3.method("op_Multiply", 2).invoke(forward, 50.0);
                        rb.method("set_linearVelocity").invoke(velocity);
                    }
                    const renderer = result.method("GetComponent", 1).inflate(Renderer).invoke();
                    if (renderer && !renderer.isNull()) {
                        const material = renderer.method("get_material").invoke();
                        material.method("set_color").invoke([0.2, 0.4, 1.0, 1.0]);
                    }
                }
            } catch(e) { console.log("Kamehameha error: " + e); }
        }
    },
    isTogglable: true,
    toolTip: "Hold trigger to continuously shoot blue backpacks forward!"
    }),
    ],
    // ── [9] Teleport ──────────────────────────────────────────────────────────
[
    new ButtonInfo({
        buttonText: "Back to Main",
        method: () => { currentCategory = 0; currentPage = 0; },
        isTogglable: false,
        toolTip: "Returns to main category."
    }),

    new ButtonInfo({
    buttonText: "Teleport All to Me",
    method: () => {
        try {
            const myPos = getTransform(GTPlayer).method("get_position").invoke();
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let count = 0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (p && !p.isNull() && !playerIsLocal(p)) {
                    p.method("RPC_Teleport").invoke(myPos);
                    count++;
                }
            }
            sendNotification("Teleported " + count + " players to you!", false);
        } catch(e) {
            sendNotification("Teleport All failed: " + e, false);
        }
    },
    isTogglable: false,
    toolTip: "Teleports every other player directly to your location."
}),
new ButtonInfo({
    buttonText: "Teleport to Jail Gun",
    enableMethod: () => { jailGunEnabled = true; },
    disableMethod: () => { jailGunEnabled = false; },
    method: () => {
        if (!jailGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < jailGunDelay) return;
        jailGunDelay = time + 0.3;
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([928.44, -542.55, 909.17]);
                sendNotification("Sent player to JAIL!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Hold right grip to aim, pull trigger to send the closest player to jail coordinates."
}),

new ButtonInfo({
    buttonText: "Teleport All to Jail",
    method: () => {
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let count = 0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (p && !p.isNull() && !playerIsLocal(p)) {
                    p.method("RPC_Teleport").invoke([928.44, -542.55, 909.17]);
                    count++;
                }
            }
            sendNotification("Sent " + count + " players to JAIL!", false);
        } catch(e) {
            sendNotification("Failed to send players to jail: " + e, false);
        }
    },
    isTogglable: false,
    toolTip: "Teleports every other player to jail coordinates."
}),

new ButtonInfo({
    buttonText: "Teleport Outside Of Jail",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (player && !player.isNull()) {
                player.method("RPC_Teleport").invoke([932.15, 542.74, -913.65]);
                sendNotification("Teleported to Jail!", false);
            } else {
                sendNotification("Not in a lobby!", false);
            }
        } catch(e) {
            sendNotification("Teleport failed: " + e, false);
        }
    },
    isTogglable: false,
    toolTip: "Teleports you directly to outside jail coordinates."
}),

new ButtonInfo({
    buttonText: "Teleport Gun",
    isTogglable: true,
    method: () => {
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (player && !player.isNull()) {
                player.method("RPC_Teleport").invoke(hitPoint);
                sendNotification("Teleported to laser dot!", false);
            }
        } catch(e) {}
    },
    toolTip: "Hold right grip to aim laser, pull trigger to teleport YOURSELF to the laser dot."
}),

new ButtonInfo({
    buttonText: "Teleport All Gun",
    isTogglable: true,
    method: () => {
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let count = 0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (p && !p.isNull() && !playerIsLocal(p)) {
                    p.method("RPC_Teleport").invoke(hitPoint);
                    count++;
                }
            }
            if (count > 0) sendNotification("Teleported " + count + " players to laser dot!", false);
        } catch(e) {}
    },
    toolTip: "Hold right grip to aim laser, pull trigger to teleport ALL OTHER players to the laser dot."
}),

    new ButtonInfo({
        buttonText: "Teleport to Skybox",
        method: () => {
            try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke([0, 500, 0]);
                sendNotification("Teleported to Skybox!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you high into the sky."
    }),

    new ButtonInfo({
        buttonText: "Teleport to Lake",
        method: () => {
            try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke([-213.170, 56.764, -15.242]);
                sendNotification("Teleported to Lake!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you to the lake."
    }),

    new ButtonInfo({
        buttonText: "Teleport to Sewers",
        method: () => {
            try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke([88.541, -103.024, 140.867]);
                sendNotification("Teleported to Sewers!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you to the sewers."
    }),

    new ButtonInfo({
        buttonText: "Teleport to Moon",
        method: () => {
            try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke([1021.538, 980.105, 1054.145]);
                sendNotification("Teleported to Moon!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you to the moon."
    }),

    new ButtonInfo({
        buttonText: "Teleport to Spawn",
        method: () => {
            try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke([-397.684, 2.135, -399.209]);
                sendNotification("Teleported to Spawn!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you to spawn."
    }),

    new ButtonInfo({
        buttonText: "Teleport to Water Tower",
        method: () => {
            try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke([49.446, 50.186, -33.340]);
                sendNotification("Teleported to Water Tower!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you to the water tower."
    }),

    new ButtonInfo({
        buttonText: "Teleport to Void",
        method: () => {
            try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke([0, -9999999, 0]);
                sendNotification("Teleported to Void!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you to the void (under the map)."
    }),

    new ButtonInfo({
        buttonText: "Teleport to Random Player",
        method: () => {
            try {
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                const otherPlayers = [];
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        otherPlayers.push(p);
                    }
                }
                if (otherPlayers.length === 0) {
                    sendNotification("No other players found!", false);
                    return;
                }
                const randomPlayer = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
                const targetPos = getTransform(randomPlayer).method("get_position").invoke();
                const player = NetPlayer.method("get_localPlayer").invoke();
                player.method("RPC_Teleport").invoke(targetPos);
                sendNotification("Teleported to random player!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports you to a random player in the server."
    }),

    new ButtonInfo({
        buttonText: "Teleport Everyone to Skybox",
        method: () => {
            try {
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let count = 0;
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        p.method("RPC_Teleport").invoke([0, 500, 0]);
                        count++;
                    }
                }
                sendNotification("Teleported " + count + " players to skybox!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports all other players to the skybox."
    }),

    new ButtonInfo({
        buttonText: "Teleport Everyone to Lake",
        method: () => {
            try {
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let count = 0;
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        p.method("RPC_Teleport").invoke([-213.170, 56.764, -15.242]);
                        count++;
                    }
                }
                sendNotification("Teleported " + count + " players to lake!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports all other players to the lake."
    }),

    new ButtonInfo({
        buttonText: "Teleport Everyone to Sewers",
        method: () => {
            try {
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let count = 0;
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        p.method("RPC_Teleport").invoke([88.541, -103.024, 140.867]);
                        count++;
                    }
                }
                sendNotification("Teleported " + count + " players to sewers!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports all other players to the sewers."
    }),

    new ButtonInfo({
        buttonText: "Teleport Everyone to Moon",
        method: () => {
            try {
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let count = 0;
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        p.method("RPC_Teleport").invoke([1021.538, 980.105, 1054.145]);
                        count++;
                    }
                }
                sendNotification("Teleported " + count + " players to moon!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports all other players to the moon."
    }),

    new ButtonInfo({
        buttonText: "Teleport Everyone to Spawn",
        method: () => {
            try {
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let count = 0;
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        p.method("RPC_Teleport").invoke([-397.684, 2.135, -399.209]);
                        count++;
                    }
                }
                sendNotification("Teleported " + count + " players to spawn!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports all other players to spawn."
    }),

    new ButtonInfo({
        buttonText: "Teleport Everyone to Void",
        method: () => {
            try {
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let count = 0;
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (p && !p.isNull() && !playerIsLocal(p)) {
                        p.method("RPC_Teleport").invoke([0, -9999999, 0]);
                        count++;
                    }
                }
                sendNotification("Teleported " + count + " players to void!", false);
            } catch(e) {}
        },
        isTogglable: false,
        toolTip: "Teleports all other players to the void."
    }),
],

// ── [10] Guns ──────────────────────────────────────────────────────────
[
new ButtonInfo({
    buttonText: "Fling Gun",
    enableMethod: () => { flingGunEnabled = true; kickGunEnabled = false; teleportGunEnabled = false; colorGunEnabled = false; spazColorGunEnabled = false; prefabGunEnabled = false; spawnGunEnabled = false; telekinesisGunEnabled = false; },
    disableMethod: () => { flingGunEnabled = false; },
    method: () => {
        if (!flingGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_AddForce").invoke([0, 800, 0]);
                sendNotification("Flinged player!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to launch them into the air."
}),

new ButtonInfo({
    buttonText: "Get Player ID Gun",
    enableMethod: () => { 
        getPlayerIDGunEnabled = true; 
        soundWaveMode = true; 
    },
    disableMethod: () => { 
        getPlayerIDGunEnabled = false; 
        soundWaveMode = false; 
    },
    method: () => {
        if (!getPlayerIDGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < getPlayerIDGunDelay) return;
        getPlayerIDGunDelay = time + 0.3;
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                let playerID = "Unknown";
                let userID = "Unknown";
                let displayName = "Unknown";
                
                try {
                    const id = closestPlayer.method("get_playerId").invoke();
                    if (id && !id.isNull()) playerID = id.toString();
                } catch(e) {}
                
                try {
                    const uid = closestPlayer.field("_userID").value;
                    if (uid) userID = uid.toString();
                } catch(e) {}
                
                try {
                    const name = closestPlayer.method("get_displayName").invoke();
                    if (name && !name.isNull()) displayName = name.toString();
                } catch(e) {}
                
                const message = "Player ID: " + playerID + " | User ID: " + userID + " | Name: " + displayName;
                sendNotification(message, false, 8);
                console.log("[PLAYER ID] " + message);
            } else {
                sendNotification("No player found!", false);
            }
        } catch(e) {
            sendNotification("Get ID failed: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Shoot a player to get their Player ID, User ID, and Display Name."
}),

new ButtonInfo({
    buttonText: "Kick Gun",
    enableMethod: () => { kickGunEnabled = true; flingGunEnabled = false; teleportGunEnabled = false; colorGunEnabled = false; spazColorGunEnabled = false; prefabGunEnabled = false; spawnGunEnabled = false; telekinesisGunEnabled = false; },
    disableMethod: () => { kickGunEnabled = false; },
    method: () => {
        if (!kickGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                kickPlayer(closestPlayer);
                sendNotification("Kicked player!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to kick them from the lobby."
}),

new ButtonInfo({
    buttonText: "TP Gun [Lake]",
    enableMethod: () => { tpLakeEnabled = true; tpMoonEnabled = false; tpSewersEnabled = false; tpSpawnEnabled = false; tpWaterTowerEnabled = false; tpSkyboxEnabled = false; tpVoidEnabled = false; },
    disableMethod: () => { tpLakeEnabled = false; },
    method: () => {
        if (!tpLakeEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([-213.170, 56.764, -15.242]);
                sendNotification("Teleported to Lake!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to teleport them to the Lake."
}),

new ButtonInfo({
    buttonText: "TP Gun [Moon]",
    enableMethod: () => { tpMoonEnabled = true; tpLakeEnabled = false; tpSewersEnabled = false; tpSpawnEnabled = false; tpWaterTowerEnabled = false; tpSkyboxEnabled = false; tpVoidEnabled = false; },
    disableMethod: () => { tpMoonEnabled = false; },
    method: () => {
        if (!tpMoonEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([1021.538, 980.105, 1054.145]);
                sendNotification("Teleported to Moon!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to teleport them to the Moon."
}),

new ButtonInfo({
    buttonText: "TP Gun [Sewers]",
    enableMethod: () => { tpSewersEnabled = true; tpLakeEnabled = false; tpMoonEnabled = false; tpSpawnEnabled = false; tpWaterTowerEnabled = false; tpSkyboxEnabled = false; tpVoidEnabled = false; },
    disableMethod: () => { tpSewersEnabled = false; },
    method: () => {
        if (!tpSewersEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([88.541, -103.024, 140.867]);
                sendNotification("Teleported to Sewers!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to teleport them to the Sewers."
}),

new ButtonInfo({
    buttonText: "TP Gun [Spawn]",
    enableMethod: () => { tpSpawnEnabled = true; tpLakeEnabled = false; tpMoonEnabled = false; tpSewersEnabled = false; tpWaterTowerEnabled = false; tpSkyboxEnabled = false; tpVoidEnabled = false; },
    disableMethod: () => { tpSpawnEnabled = false; },
    method: () => {
        if (!tpSpawnEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([-397.684, 2.135, -399.209]);
                sendNotification("Teleported to Spawn!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to teleport them to Spawn."
}),

new ButtonInfo({
    buttonText: "TP Gun [Water Tower]",
    enableMethod: () => { tpWaterTowerEnabled = true; tpLakeEnabled = false; tpMoonEnabled = false; tpSewersEnabled = false; tpSpawnEnabled = false; tpSkyboxEnabled = false; tpVoidEnabled = false; },
    disableMethod: () => { tpWaterTowerEnabled = false; },
    method: () => {
        if (!tpWaterTowerEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([49.446, 50.186, -33.340]);
                sendNotification("Teleported to Water Tower!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to teleport them to Water Tower."
}),

new ButtonInfo({
    buttonText: "TP Gun [Skybox]",
    enableMethod: () => { tpSkyboxEnabled = true; tpLakeEnabled = false; tpMoonEnabled = false; tpSewersEnabled = false; tpSpawnEnabled = false; tpWaterTowerEnabled = false; tpVoidEnabled = false; },
    disableMethod: () => { tpSkyboxEnabled = false; },
    method: () => {
        if (!tpSkyboxEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([0, 500, 0]);
                sendNotification("Teleported to Skybox!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to teleport them to the Skybox."
}),

new ButtonInfo({
    buttonText: "TP Gun [Void]",
    enableMethod: () => { tpVoidEnabled = true; tpLakeEnabled = false; tpMoonEnabled = false; tpSewersEnabled = false; tpSpawnEnabled = false; tpWaterTowerEnabled = false; tpSkyboxEnabled = false; },
    disableMethod: () => { tpVoidEnabled = false; },
    method: () => {
        if (!tpVoidEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                closestPlayer.method("RPC_Teleport").invoke([0, -9999999, 0]);
                sendNotification("Teleported to Void!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to teleport them to the Void."
}),

new ButtonInfo({
    buttonText: "Color Gun",
    enableMethod: () => { colorGunEnabled = true; flingGunEnabled = false; kickGunEnabled = false; teleportGunEnabled = false; spazColorGunEnabled = false; prefabGunEnabled = false; spawnGunEnabled = false; telekinesisGunEnabled = false; },
    disableMethod: () => { colorGunEnabled = false; },
    method: () => {
        if (!colorGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                const randomHue = Math.random();
                closestPlayer.method("RPC_SetColorHSV").invoke(5.0, randomHue, 1.0, 1.0);
                sendNotification("Changed player color!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to change their color to a random hue."
}),

new ButtonInfo({
    buttonText: "Spaz Color Gun",
    enableMethod: () => { spazColorGunEnabled = true; flingGunEnabled = false; kickGunEnabled = false; teleportGunEnabled = false; colorGunEnabled = false; prefabGunEnabled = false; spawnGunEnabled = false; telekinesisGunEnabled = false; },
    disableMethod: () => { spazColorGunEnabled = false; },
    method: () => {
        if (!spazColorGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger) return;
        if (!gunData.ray || gunData.ray.isNull()) return;
        
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            let closestPlayer = null;
            let closestDist = 5.0;
            
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) {
                    closestDist = dist;
                    closestPlayer = p;
                }
            }
            
            if (closestPlayer && !closestPlayer.isNull()) {
                const randomHue = Math.random();
                closestPlayer.method("RPC_SetColorHSV").invoke(0.2, randomHue, 1.0, 1.0);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Hold trigger to continuously flash random colors on the player you're aiming at."
}),

new ButtonInfo({
    buttonText: "Telekinesis Gun",
    enableMethod: () => { telekinesisGunEnabled = true; flingGunEnabled = false; kickGunEnabled = false; teleportGunEnabled = false; colorGunEnabled = false; spazColorGunEnabled = false; prefabGunEnabled = false; spawnGunEnabled = false; },
    disableMethod: () => { telekinesisGunEnabled = false; telekinesisTarget = null; },
    method: () => {
        if (!telekinesisGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            telekinesisTarget = null;
            return;
        }
        const gunData = renderGun();
        
        if (rightTrigger) {
            if (!telekinesisTarget || telekinesisTarget.isNull()) {
                try {
                    const hitPoint = gunData.endPosition;
                    const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                    let closestPlayer = null;
                    let closestDist = 5.0;
                    
                    for (let i = 0; i < allPlayers.length; i++) {
                        const p = allPlayers.get(i);
                        if (!p || p.isNull() || playerIsLocal(p)) continue;
                        const pPos = getTransform(p).method("get_position").invoke();
                        const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                        if (dist < closestDist) {
                            closestDist = dist;
                            closestPlayer = p;
                        }
                    }
                    
                    if (closestPlayer && !closestPlayer.isNull()) {
                        telekinesisTarget = closestPlayer;
                        sendNotification("Player grabbed!", false);
                    }
                } catch(e) {}
            }
            
            if (telekinesisTarget && !telekinesisTarget.isNull()) {
                try {
                    const hitPoint = gunData.endPosition;
                    telekinesisTarget.method("RPC_Teleport").invoke(hitPoint);
                } catch(e) {}
            }
        } else {
            telekinesisTarget = null;
        }
    },
    isTogglable: true,
    toolTip: "Shoot a player to grab them, then hold trigger and move laser to drag them anywhere."
}),
],

// ── [11] Whitelist ──────────────────────────────────────────────────────────
[
    new ButtonInfo({
        buttonText: "Back to Main",
        method: () => { currentCategory = 0; currentPage = 0; },
        isTogglable: false,
        toolTip: "Returns to main category."
    }),

    new ButtonInfo({
        buttonText: "Toggle Whitelist",
        enableMethod: () => { whitelistEnabled = true; sendNotification("Whitelist ON", false); },
        disableMethod: () => { whitelistEnabled = false; sendNotification("Whitelist OFF", false); },
        isTogglable: true,
        toolTip: "Enables or disables the whitelist system."
    }),

    new ButtonInfo({
        buttonText: "Clear Whitelist",
        method: () => { whitelist = []; sendNotification("Whitelist cleared!", false); },
        isTogglable: false,
        toolTip: "Removes all players from the whitelist."
    }),

    new ButtonInfo({
        buttonText: "List Whitelist",
        method: () => {
            if (whitelist.length === 0) { sendNotification("Whitelist is empty", false); return; }
            sendNotification("WL: " + whitelist.join(", "), false, 8);
        },
        isTogglable: false,
        toolTip: "Shows all whitelisted players."
    }),

    new ButtonInfo({
        buttonText: "WL Add Gun",
        enableMethod: () => { wlGunBuffEnabled = false; },
        disableMethod: () => { wlGunBuffEnabled = false; },
        method: () => {
            if (!rightGrab) {
                if (GunPointer) GunPointer.method("SetActive").invoke(false);
                if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
                return;
            }
            const gunData = renderGun();
            if (!rightTrigger) return;
            
            try {
                const hitPoint = gunData.endPosition;
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let closestPlayer = null;
                let closestDist = 5.0;
                
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (!p || p.isNull() || playerIsLocal(p)) continue;
                    const pPos = getTransform(p).method("get_position").invoke();
                    const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestPlayer = p;
                    }
                }
                
                if (closestPlayer && !closestPlayer.isNull()) {
                    addToWhitelist(closestPlayer);
                    sendNotification("Added to whitelist!", false);
                } else {
                    sendNotification("No player found", false);
                }
            } catch(e) {}
        },
        isTogglable: true,
        toolTip: "Shoot a player to add them to the whitelist."
    }),

    new ButtonInfo({
        buttonText: "WL Remove Gun",
        enableMethod: () => { wlGunBuffEnabled = false; },
        disableMethod: () => { wlGunBuffEnabled = false; },
        method: () => {
            if (!rightGrab) {
                if (GunPointer) GunPointer.method("SetActive").invoke(false);
                if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
                return;
            }
            const gunData = renderGun();
            if (!rightTrigger) return;
            
            try {
                const hitPoint = gunData.endPosition;
                const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
                let closestPlayer = null;
                let closestDist = 5.0;
                
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (!p || p.isNull() || playerIsLocal(p)) continue;
                    const pPos = getTransform(p).method("get_position").invoke();
                    const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestPlayer = p;
                    }
                }
                
                if (closestPlayer && !closestPlayer.isNull()) {
                    removeFromWhitelist(closestPlayer);
                    sendNotification("Removed from whitelist!", false);
                } else {
                    sendNotification("No player found", false);
                }
            } catch(e) {}
        },
        isTogglable: true,
        toolTip: "Shoot a player to remove them from the whitelist."
    }),

new ButtonInfo({
    buttonText: "WL Fly (Press B)",
    enableMethod: () => { wlFlyEnabled = true; },
    disableMethod: () => { wlFlyEnabled = false; },
    method: () => {
        if (!wlFlyEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const forward = getTransform(p).method("get_forward").invoke();
                        p.method("RPC_AddForce").invoke([forward.field("x").value * 8.0, forward.field("y").value * 8.0 + 2.0, forward.field("z").value * 8.0]);
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to fly forward."
}),

new ButtonInfo({
    buttonText: "WL Rocket (Press B)",
    enableMethod: () => { wlRocketEnabled = true; },
    disableMethod: () => { wlRocketEnabled = false; },
    method: () => {
        if (!wlRocketEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const forward = getTransform(p).method("get_forward").invoke();
                        const rocket = spawnNetworkPrefab("RPGRocket", pos, identityQuaternion);
                        if (rocket && !rocket.isNull()) {
                            const rb = rocket.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) {
                                rb.method("set_velocity").invoke([forward.field("x").value * 30.0, forward.field("y").value * 30.0 + 1.0, forward.field("z").value * 30.0]);
                            }
                        }
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn a rocket forward."
}),

new ButtonInfo({
    buttonText: "WL Flare (Press B)",
    enableMethod: () => { wlFlareEnabled = true; },
    disableMethod: () => { wlFlareEnabled = false; },
    method: () => {
        if (!wlFlareEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const forward = getTransform(p).method("get_forward").invoke();
                        const flare = spawnNetworkPrefab("FlareGunProjectile", pos, identityQuaternion);
                        if (flare && !flare.isNull()) {
                            const rb = flare.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) {
                                rb.method("set_velocity").invoke([forward.field("x").value * 25.0, forward.field("y").value * 25.0 + 1.0, forward.field("z").value * 25.0]);
                            }
                        }
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to shoot a flare forward."
}),

new ButtonInfo({
    buttonText: "WL Car (Press B)",
    enableMethod: () => { wlCarEnabled = true; },
    disableMethod: () => { wlCarEnabled = false; },
    method: () => {
        if (!wlCarEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const forward = getTransform(p).method("get_forward").invoke();
                        const car = spawnNetworkPrefab("Vehicle_Buggy", pos, identityQuaternion);
                        if (car && !car.isNull()) {
                            const rb = car.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) {
                                rb.method("set_velocity").invoke([forward.field("x").value * 25.0, forward.field("y").value * 25.0 + 1.0, forward.field("z").value * 25.0]);
                            }
                        }
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn a car forward."
}),

new ButtonInfo({
    buttonText: "WL Crate (Press B)",
    enableMethod: () => { wlCrateEnabled = true; },
    disableMethod: () => { wlCrateEnabled = false; },
    method: () => {
        if (!wlCrateEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const forward = getTransform(p).method("get_forward").invoke();
                        const crate = spawnItemAtPos("item_crate", pos, identityQuaternion);
                        if (crate && !crate.isNull()) {
                            const rb = crate.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) {
                                rb.method("set_velocity").invoke([forward.field("x").value * 20.0, forward.field("y").value * 20.0 + 1.0, forward.field("z").value * 20.0]);
                            }
                        }
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn a crate forward."
}),

new ButtonInfo({
    buttonText: "WL Suitcase (Press B)",
    enableMethod: () => { wlSuitcaseEnabled = true; },
    disableMethod: () => { wlSuitcaseEnabled = false; },
    method: () => {
        if (!wlSuitcaseEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const forward = getTransform(p).method("get_forward").invoke();
                        const suitcase = spawnItemAtPos("item_pelican_case", pos, identityQuaternion);
                        if (suitcase && !suitcase.isNull()) {
                            const rb = suitcase.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) {
                                rb.method("set_velocity").invoke([forward.field("x").value * 20.0, forward.field("y").value * 20.0 + 1.0, forward.field("z").value * 20.0]);
                            }
                        }
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn a suitcase forward."
}),

new ButtonInfo({
    buttonText: "WL Bomb (Press B)",
    enableMethod: () => { wlBombEnabled = true; },
    disableMethod: () => { wlBombEnabled = false; },
    method: () => {
        if (!wlBombEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const forward = getTransform(p).method("get_forward").invoke();
                        const bomb = spawnNetworkPrefab("BombController", pos, identityQuaternion);
                        if (bomb && !bomb.isNull()) {
                            const rb = bomb.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) {
                                rb.method("set_velocity").invoke([forward.field("x").value * 20.0, forward.field("y").value * 20.0 + 1.0, forward.field("z").value * 20.0]);
                            }
                        }
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn a bomb forward."
}),

new ButtonInfo({
    buttonText: "WL Egg (Press B)",
    enableMethod: () => { wlEggEnabled = true; },
    disableMethod: () => { wlEggEnabled = false; },
    method: () => {
        if (!wlEggEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const forward = getTransform(p).method("get_forward").invoke();
                        const egg = spawnNetworkPrefab("ExplosiveEgg", pos, identityQuaternion);
                        if (egg && !egg.isNull()) {
                            const rb = egg.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) {
                                rb.method("set_velocity").invoke([forward.field("x").value * 25.0, forward.field("y").value * 25.0 + 1.0, forward.field("z").value * 25.0]);
                            }
                        }
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn an explosive egg forward."
}),

new ButtonInfo({
    buttonText: "WL Balloon (Press B)",
    enableMethod: () => { wlBalloonEnabled = true; },
    disableMethod: () => { wlBalloonEnabled = false; },
    method: () => {
        if (!wlBalloonEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        spawnNetworkPrefab("InflatedBalloon", pos, identityQuaternion);
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn a balloon at their position."
}),

new ButtonInfo({
    buttonText: "WL Giveaway (Press B)",
    enableMethod: () => { wlGiveawayEnabled = true; },
    disableMethod: () => { wlGiveawayEnabled = false; },
    method: () => {
        if (!wlGiveawayEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const pos = getTransform(p).method("get_position").invoke();
                        const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                        spawnItemAtPos(randomItem, pos, identityQuaternion);
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to spawn a random item."
}),

new ButtonInfo({
    buttonText: "WL Spaz Rainbow (Press B)",
    enableMethod: () => { wlSpazRainbowEnabled = true; },
    disableMethod: () => { wlSpazRainbowEnabled = false; },
    method: () => {
        if (!wlSpazRainbowEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        const randomHue = Math.random();
                        p.method("RPC_SetColorHSV").invoke(5.0, randomHue, 1.0, 1.0);
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to flash a random color."
}),

new ButtonInfo({
    buttonText: "WL Disintegrate (Press B)",
    enableMethod: () => { wlDisintegrateEnabled = true; },
    disableMethod: () => { wlDisintegrateEnabled = false; },
    method: () => {
        if (!wlDisintegrateEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        p.method("RPC_Teleport").invoke([0, -9999999, 0]);
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to teleport to the void."
}),

new ButtonInfo({
    buttonText: "WL Speed Buff (Press B)",
    enableMethod: () => { wlGunBuffEnabled = true; },
    disableMethod: () => { wlGunBuffEnabled = false; },
    method: () => {
        if (!wlGunBuffEnabled) return;
        try {
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                if (whitelistEnabled && !isPlayerWhitelisted(p)) continue;
                try {
                    const rightSecondary = p.method("get_secondaryButton").invoke();
                    if (rightSecondary === true) {
                        p.method("RPC_ApplyBuff").invoke(1);
                    }
                } catch(e) {}
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Whitelisted players press B to get a speed buff."
}),
],
// ── [12] Giveaway ──────────────────────────────────────────────────────────
[
    new ButtonInfo({
        buttonText: "Back to Main",
        method: () => { currentCategory = 0; currentPage = 0; },
        isTogglable: false,
        toolTip: "Returns to main category."
    }),

new ButtonInfo({
    buttonText: "Giveaway Bag Spammer",
    enableMethod: () => { giveawayBagSpammerEnabled = true; },
    disableMethod: () => { giveawayBagSpammerEnabled = false; giveawayBagSpammerDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!giveawayBagSpammerEnabled) return;
        if (rightSecondary && rightGrab && time > giveawayBagSpammerDelay) {
            giveawayBagSpammerDelay = time + 0.15;
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                const bag = spawnItemAtPos("item_backpack_large_base", pos, rot);
                if (!bag || bag.isNull()) return;
                
                const bagGO = bag.method("get_gameObject").invoke();
                if (!bagGO || bagGO.isNull()) return;
                
                const gbo = bagGO.method("GetComponent", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    const randScale = Math.floor(Math.random() * 256) - 128;
                    const randHue = Math.floor(Math.random() * 255) - 127;
                    const randSat = Math.floor(Math.random() * 148) - 20;
                    gbo.method("set_scaleModifier").invoke(randScale);
                    gbo.method("set_colorHue").invoke(randHue);
                    gbo.method("set_colorSaturation").invoke(randSat);
                }
                
                const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                fillBagWithItems(bag, randomItem, true);
                sendNotification("Spawned Giveaway Bag", false);
            } catch(e) {
                console.log("Giveaway bag spammer error: " + e);
            }
        }
    },
    toolTip: "Hold right grip + B to spawn random giveaway bags with random items inside."
}),

new ButtonInfo({
    buttonText: "Money Bag Spammer",
    enableMethod: () => { moneyBagSpammerEnabled = true; },
    disableMethod: () => { moneyBagSpammerEnabled = false; moneyBagSpammerDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!moneyBagSpammerEnabled) return;
        if (rightSecondary && rightGrab && time > moneyBagSpammerDelay) {
            moneyBagSpammerDelay = time + 0.15;
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                const bag = spawnItemAtPos("item_backpack_large_base", pos, rot);
                if (!bag || bag.isNull()) return;
                
                const bagGO = bag.method("get_gameObject").invoke();
                if (!bagGO || bagGO.isNull()) return;
                
                const gbo = bagGO.method("GetComponent", 1).inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    gbo.method("set_scaleModifier").invoke(-127);
                    gbo.method("set_colorHue").invoke(0);
                    gbo.method("set_colorSaturation").invoke(0);
                }
                
                fillBagWithItems(bag, "item_rare_trading_card", false);
                sendNotification("Spawned Money Bag", false);
            } catch(e) {
                console.log("Money bag spammer error: " + e);
            }
        }
    },
    toolTip: "Hold right grip + B to spawn tiny money bags filled with rare trading cards."
}),
new ButtonInfo({
    buttonText: "Giveaway Bag Gun",
    enableMethod: () => { giveawayBagGunEnabled = true; },
    disableMethod: () => { giveawayBagGunEnabled = false; giveawayBagGunDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!giveawayBagGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < giveawayBagGunDelay) return;
        giveawayBagGunDelay = time + 0.2;
        try {
            const hitPoint = gunData.endPosition;
            const bag = spawnItemAtPos("item_backpack_large_base", hitPoint, identityQuaternion);
            if (!bag || bag.isNull()) return;
            
            const bagGO = bag.method("get_gameObject").invoke();
            if (!bagGO || bagGO.isNull()) return;
            
            const gbo = bagGO.method("GetComponent", 1).inflate(GBOClass).invoke();
            if (gbo && !gbo.isNull()) {
                const randScale = Math.floor(Math.random() * 256) - 128;
                const randHue = Math.floor(Math.random() * 255) - 127;
                const randSat = Math.floor(Math.random() * 148) - 20;
                gbo.method("set_scaleModifier").invoke(randScale);
                gbo.method("set_colorHue").invoke(randHue);
                gbo.method("set_colorSaturation").invoke(randSat);
            }
            
            const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
            fillBagWithItems(bag, randomItem, true);
            
            const rb = bagGO.method("GetComponent", 1).inflate(Rigidbody).invoke();
            if (rb && !rb.isNull()) {
                const forward = rightHandTransform.method("get_forward").invoke();
                const vel = Vector3.method("op_Multiply", 2).invoke(forward, 15);
                rb.method("set_velocity").invoke(vel);
            }
            sendNotification("Spawned Giveaway Bag", false);
        } catch(e) {
            console.log("Giveaway bag gun error: " + e);
        }
    },
    toolTip: "Hold right grip to aim, pull trigger to spawn giveaway bags at laser dot."
}),

new ButtonInfo({
    buttonText: "Money Bag Gun",
    enableMethod: () => { moneyBagGunEnabled = true; },
    disableMethod: () => { moneyBagGunEnabled = false; moneyBagGunDelay = 0; },
    isTogglable: true,
    method: () => {
        if (!moneyBagGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull() || time < moneyBagGunDelay) return;
        moneyBagGunDelay = time + 0.2;
        try {
            const hitPoint = gunData.endPosition;
            const bag = spawnItemAtPos("item_backpack_large_base", hitPoint, identityQuaternion);
            if (!bag || bag.isNull()) return;
            
            const bagGO = bag.method("get_gameObject").invoke();
            if (!bagGO || bagGO.isNull()) return;
            
            const gbo = bagGO.method("GetComponent", 1).inflate(GBOClass).invoke();
            if (gbo && !gbo.isNull()) {
                gbo.method("set_scaleModifier").invoke(-127);
                gbo.method("set_colorHue").invoke(0);
                gbo.method("set_colorSaturation").invoke(0);
            }
            
            fillBagWithItems(bag, "item_rare_trading_card", false);
            
            const rb = bagGO.method("GetComponent", 1).inflate(Rigidbody).invoke();
            if (rb && !rb.isNull()) {
                const forward = rightHandTransform.method("get_forward").invoke();
                const vel = Vector3.method("op_Multiply", 2).invoke(forward, 15);
                rb.method("set_velocity").invoke(vel);
            }
            sendNotification("Spawned Money Bag", false);
        } catch(e) {
            console.log("Money bag gun error: " + e);
        }
    },
    toolTip: "Hold right grip to aim, pull trigger to spawn tiny money bags at laser dot."
}),

new ButtonInfo({
    buttonText: "Give Self Money",
    isTogglable: false,
    toolTip: "Give yourself 999,999 money",
    method: () => {
        try {
            const gameManager = AssemblyCSharp.class("AnimalCompany.GameManager");
            gameManager.method("AddPlayerMoney").invoke(999999);
            sendNotification("Money given!", false);
        } catch(e) {
            sendNotification("Give money failed: " + e, false);
        }
    }
}),

new ButtonInfo({
    buttonText: "Give Self ALOT of Money (works in og map only)",
    isTogglable: false,
    toolTip: "Give yourself a massive amount of money",
    method: () => {
        try {
            const gameManager = AssemblyCSharp.class("AnimalCompany.GameManager");
            gameManager.method("AddPlayerMoney").invoke(999999999);
            sendNotification("ALOT of money given!", false);
        } catch(e) {
            sendNotification("Give money failed: " + e, false);
        }
    }
}),
new ButtonInfo({
    buttonText: "Give Self ALOT ALOT of Money (works in og map only)",
    isTogglable: false,
    toolTip: "Give yourself a massive amount of money",
    method: () => {
        try {
            const gameManager = AssemblyCSharp.class("AnimalCompany.GameManager");
            gameManager.method("AddPlayerMoney").invoke(251583723467386366);
            sendNotification("ALOT of money given!", false);
        } catch(e) {
            sendNotification("Give money failed: " + e, false);
        }
    }
}),

new ButtonInfo({
    buttonText: "Pay All Money",
    isTogglable: false,
    toolTip: "Give everyone 9,999,999 money",
    method: () => {
        try {
            let count = 0;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            
            for (let i = 0; i < allPlayers.length; i++) {
                const player = allPlayers.get(i);
                if (!player || player.isNull() || playerIsLocal(player)) continue;
                try {
                    player.method("RPC_AddPlayerMoney").invoke(9999999);
                    count++;
                } catch(e) {}
            }
            sendNotification("Paid " + count + " players!", false);
        } catch(e) {
            sendNotification("Pay all failed: " + e, false);
        }
    }
}),
new ButtonInfo({
    buttonText: "Pay All ALOT Money (works in og map only)",
    isTogglable: false,
    toolTip: "Give everyone ALOT of money",
    method: () => {
        try {
            let count = 0;
            const allPlayers = Object.method("FindObjectsByType", 1).inflate(NetPlayer).invoke(0);
            
            for (let i = 0; i < allPlayers.length; i++) {
                const player = allPlayers.get(i);
                if (!player || player.isNull() || playerIsLocal(player)) continue;
                try {
                    player.method("RPC_AddPlayerMoney").invoke(275826572926758238);
                    count++;
                } catch(e) {}
            }
            sendNotification("Paid " + count + " players!", false);
        } catch(e) {
            sendNotification("Pay all failed: " + e, false);
        }
    }
}),
],

// ── [12] Giveaway ──────────────────────────────────────────────────────────
[
    new ButtonInfo({
        buttonText: "Back to Main",
        method: () => { currentCategory = 0; currentPage = 0; },
        isTogglable: false,
        toolTip: "Returns to main category."
    }),
    new ButtonInfo({
    buttonText: "Anti Kick",
    enableMethod: () => {
        antiKickEnabled = true;
        const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
        const kickMethod = PrefabGenerator.method("RPC_KickPlayer");
        kickMethod.implementation = function () {
            if (antiKickEnabled) return;
            return kickMethod.invoke();
        };
        sendNotification("Anti Kick ON", false);
    },
    disableMethod: () => {
        antiKickEnabled = false;
        const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
        PrefabGenerator.method("RPC_KickPlayer").implementation = null;
        sendNotification("Anti Kick OFF", false);
    },
    isTogglable: true,
    toolTip: "Blocks RPC_KickPlayer so you cant be kicked."
}),
new ButtonInfo({
    buttonText: "Anti Teleport",
    enableMethod: () => {
        antiTeleportEnabled = true;
        try {
            const localPlayer = NetPlayer.method("get_localPlayer").invoke();
            const RPC_Teleport = localPlayer.method("RPC_Teleport");
            RPC_Teleport.implementation = function (pos: any) {
                if (antiTeleportEnabled) return;
                return RPC_Teleport.invoke(pos);
            };
        } catch(e) {}
        try {
            const setPos = GTPlayerClass.method("set_position");
            if (setPos) {
                setPos.implementation = function (pos: any) {
                    if (antiTeleportEnabled) return;
                    return setPos.invoke(pos);
                };
            }
        } catch(e) {}
        sendNotification("Anti Teleport ON", false);
    },
    disableMethod: () => {
        antiTeleportEnabled = false;
        try {
            const localPlayer = NetPlayer.method("get_localPlayer").invoke();
            localPlayer.method("RPC_Teleport").implementation = null;
        } catch(e) {}
        try {
            const setPos = GTPlayerClass.method("set_position");
            if (setPos) setPos.implementation = null;
        } catch(e) {}
        sendNotification("Anti Teleport OFF", false);
    },
    isTogglable: true,
    toolTip: "Blocks RPC_Teleport so you cant be moved."
}),
new ButtonInfo({
    buttonText: "Anti Blind",
    enableMethod: () => { antiBlindEnabled = true; sendNotification("Anti Blind ON", false); },
    disableMethod: () => { antiBlindEnabled = false; sendNotification("Anti Blind OFF", false); },
    method: () => {
        if (!antiBlindEnabled) return;
        try {
            const allObjects = Object.method("FindObjectsOfType").inflate(GameObject).invoke();
            let count = 0;
            for (let i = 0; i < allObjects.length; i++) {
                const obj = allObjects.get(i);
                if (!obj || obj.isNull()) continue;
                try {
                    const name = obj.method("get_name").invoke().toString().toLowerCase();
                    if (name.includes("item_goopfish") || name.includes("goopfish")) {
                        Destroy(obj);
                        count++;
                    }
                } catch(e) {}
            }
            if (count > 10) sendNotification("Anti Blind: cleared " + count + " goopfish!", false);
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Automatically deletes goopfish if too many appear."
}),
new ButtonInfo({
    buttonText: "Anti Color",
    enableMethod: () => {
        antiColorEnabled = true;
        try {
            const setColor = NetPlayer.method("RPC_SetColorHSV");
            setColor.implementation = function (scale: any, h: any, s: any, v: any) {
                if (antiColorEnabled && playerIsLocal(this)) return;
                return setColor.invoke(scale, h, s, v);
            };
        } catch(e) {}
        sendNotification("Anti Color ON", false);
    },
    disableMethod: () => {
        antiColorEnabled = false;
        try { NetPlayer.method("RPC_SetColorHSV").implementation = null; } catch(e) {}
        sendNotification("Anti Color OFF", false);
    },
    isTogglable: true,
    toolTip: "Blocks RPC_SetColorHSV so modders cant change your color."
}),
new ButtonInfo({
    buttonText: "Anti Force",
    enableMethod: () => {
        antiForceEnabled = true;
        try {
            const addForce = NetPlayer.method("RPC_AddForce");
            addForce.implementation = function (force: any) {
                if (antiForceEnabled && playerIsLocal(this)) return;
                return addForce.invoke(force);
            };
        } catch(e) {}
        sendNotification("Anti Force ON", false);
    },
    disableMethod: () => {
        antiForceEnabled = false;
        try { NetPlayer.method("RPC_AddForce").implementation = null; } catch(e) {}
        sendNotification("Anti Force OFF", false);
    },
    isTogglable: true,
    toolTip: "Blocks RPC_AddForce so modders cant fling you."
}),
new ButtonInfo({
    buttonText: "Anti Scale",
    enableMethod: () => {
        antiScaleEnabled = true;
        try {
            const setScale = NetPlayer.method("set_playerScale");
            setScale.implementation = function (scale: any) {
                if (antiScaleEnabled && playerIsLocal(this)) return;
                return setScale.invoke(scale);
            };
        } catch(e) {}
        sendNotification("Anti Scale ON", false);
    },
    disableMethod: () => {
        antiScaleEnabled = false;
        try { NetPlayer.method("set_playerScale").implementation = null; } catch(e) {}
        sendNotification("Anti Scale OFF", false);
    },
    isTogglable: true,
    toolTip: "Blocks set_playerScale so modders cant resize you."
}),
new ButtonInfo({
    buttonText: "Anti Void",
    enableMethod: () => { antiVoidEnabled = true; sendNotification("Anti Void ON", false); },
    disableMethod: () => { antiVoidEnabled = false; sendNotification("Anti Void OFF", false); },
    method: () => {
        if (!antiVoidEnabled) return;
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player || player.isNull()) return;
            const pos = getTransform(player).method("get_position").invoke();
            if (pos.field("y").value < -500) {
                player.method("RPC_Teleport").invoke([-397.684, 2.135, -399.209]);
                sendNotification("Anti Void: teleported back to spawn!", false);
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Auto teleports you back to spawn if you fall below Y -500."
}),
new ButtonInfo({
    buttonText: "Room Lock",
    enableMethod: () => { roomLockEnabled = true; sendNotification("Room Locked", false); },
    disableMethod: () => { roomLockEnabled = false; sendNotification("Room Unlocked", false); },
    method: () => {
        if (!roomLockEnabled) return;
        if (frameCount % 120 === 0) {
            try {
                const allPlayers = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                for (let i = 0; i < allPlayers.length; i++) {
                    const p = allPlayers.get(i);
                    if (!p || p.isNull() || playerIsLocal(p)) continue;
                    kickPlayer(p);
                }
            } catch(e) {}
        }
    },
    isTogglable: true,
    toolTip: "Kicks anyone who joins while enabled."
}),
new ButtonInfo({
    buttonText: "Anti Fly Gun",
    enableMethod: () => { antiFlyGunEnabled = true; },
    disableMethod: () => { antiFlyGunEnabled = false; antiFlyTargets.clear(); sendNotification("Anti Fly Gun OFF", false); },
    method: () => {
        if (!antiFlyGunEnabled) return;
        antiFlyTargets.forEach((lastPos, player) => {
            try {
                if (!player || player.isNull()) { antiFlyTargets.delete(player); return; }
                const currentPos = getTransform(player).method("get_position").invoke();
                const cx = currentPos.field("x").value;
                const cy = currentPos.field("y").value;
                const cz = currentPos.field("z").value;
                const dist = Math.sqrt((cx-lastPos.stored.field("x").value)*(cx-lastPos.stored.field("x").value) + (cy-lastPos.stored.field("y").value)*(cy-lastPos.stored.field("y").value) + (cz-lastPos.stored.field("z").value)*(cz-lastPos.stored.field("z").value));
                if (dist > 3.0) {
                    player.method("RPC_Teleport").invoke(lastPos.stored);
                } else {
                    lastPos.stored = currentPos;
                }
            } catch(e) {}
        });
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull()) return;
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
            let closestPlayer = null;
            let closestDist = 5.0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) { closestDist = dist; closestPlayer = p; }
            }
            if (closestPlayer && !closestPlayer.isNull()) {
                if (antiFlyTargets.has(closestPlayer)) {
                    antiFlyTargets.delete(closestPlayer);
                    sendNotification("Anti Fly removed from player", false);
                } else {
                    antiFlyTargets.set(closestPlayer, { stored: getTransform(closestPlayer).method("get_position").invoke() });
                    sendNotification("Anti Fly applied to player", false);
                }
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to stop them flying. Shoot again to remove."
}),
new ButtonInfo({
    buttonText: "Anti Orbit Gun",
    enableMethod: () => { antiOrbitGunEnabled = true; },
    disableMethod: () => { antiOrbitGunEnabled = false; antiOrbitTargets.clear(); sendNotification("Anti Orbit Gun OFF", false); },
    method: () => {
        if (!antiOrbitGunEnabled) return;
        antiOrbitTargets.forEach((savedPos, player) => {
            try {
                if (!player || player.isNull()) { antiOrbitTargets.delete(player); return; }
                const currentPos = getTransform(player).method("get_position").invoke();
                const cx = currentPos.field("x").value;
                const cy = currentPos.field("y").value;
                const cz = currentPos.field("z").value;
                const dist = Math.sqrt((cx-savedPos.field("x").value)*(cx-savedPos.field("x").value) + (cy-savedPos.field("y").value)*(cy-savedPos.field("y").value) + (cz-savedPos.field("z").value)*(cz-savedPos.field("z").value));
                if (dist > 1.0) {
                    player.method("RPC_Teleport").invoke(savedPos);
                } else {
                    antiOrbitTargets.set(player, currentPos);
                }
            } catch(e) {}
        });
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull()) return;
        try {
            const hitPoint = gunData.endPosition;
            const allPlayers = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
            let closestPlayer = null;
            let closestDist = 5.0;
            for (let i = 0; i < allPlayers.length; i++) {
                const p = allPlayers.get(i);
                if (!p || p.isNull() || playerIsLocal(p)) continue;
                const pPos = getTransform(p).method("get_position").invoke();
                const dist = Vector3.method("Distance").invoke(hitPoint, pPos) as number;
                if (dist < closestDist) { closestDist = dist; closestPlayer = p; }
            }
            if (closestPlayer && !closestPlayer.isNull()) {
                if (antiOrbitTargets.has(closestPlayer)) {
                    antiOrbitTargets.delete(closestPlayer);
                    sendNotification("Anti Orbit removed from player", false);
                } else {
                    antiOrbitTargets.set(closestPlayer, getTransform(closestPlayer).method("get_position").invoke());
                    sendNotification("Anti Orbit applied to player", false);
                }
            }
        } catch(e) {}
    },
    isTogglable: true,
    toolTip: "Shoot a player to protect them from being orbited. Shoot again to remove."
}),
new ButtonInfo({
    buttonText: "Delete Prefab Gun",
    enableMethod: () => { deletePrefabGunEnabled = true; },
    disableMethod: () => { deletePrefabGunEnabled = false; },
    method: () => {
        if (!deletePrefabGunEnabled) return;
        if (!rightGrab) {
            if (GunPointer) GunPointer.method("SetActive").invoke(false);
            if (GunLine) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false);
            return;
        }
        const gunData = renderGun();
        if (!rightTrigger || !gunData.ray || gunData.ray.isNull()) return;
        try {
            const hitCollider = gunData.ray.method("get_collider").invoke();
            if (!hitCollider || hitCollider.isNull()) return;
            const hitGO = hitCollider.method("get_gameObject").invoke();
            if (!hitGO || hitGO.isNull()) return;
            const netObj = hitGO.method("GetComponent", 1).inflate(NetworkObjectClass).invoke();
            if (netObj && !netObj.isNull()) {
                const runner = netObj.method("get_Runner").invoke();
                if (runner && !runner.isNull()) {
                    runner.method("Despawn").invoke(netObj);
                    sendNotification("Prefab deleted!", false);
                }
            } else {
                const parent = getTransform(hitGO).method("get_parent").invoke();
                if (parent && !parent.isNull()) {
                    const parentGO = parent.method("get_gameObject").invoke();
                    const parentNet = parentGO.method("GetComponent", 1).inflate(NetworkObjectClass).invoke();
                    if (parentNet && !parentNet.isNull()) {
                        const runner = parentNet.method("get_Runner").invoke();
                        if (runner && !runner.isNull()) {
                            runner.method("Despawn").invoke(parentNet);
                            sendNotification("Prefab deleted!", false);
                        }
                    }
                }
            }
        } catch(e) {
            sendNotification("Delete failed: " + e, false);
        }
    },
    isTogglable: true,
    toolTip: "Aim at any networked object and pull trigger to delete it."
}),
],
];

    // ─── Button map ───────────────────────────────────────────────────────────

    let buttonMap: Map<string, ButtonInfo> = new Map();
    buttons.flat().forEach(button => { buttonMap.set(button.buttonText, button); });

    function getIndex(buttonText: string): ButtonInfo {
        return buttonMap.get(buttonText);
    }

    // ─── Hook: button press ───────────────────────────────────────────────────

    const ButtonActivation = GorillaReportButton.method("OnTriggerEnter");
    ButtonActivation.implementation = function (collider) {
        const rawName = this.method("get_name").invoke().toString();

        if (rawName.length > 1 && rawName[1] == "@") {
            if (collider.handle.equals(referenceCollider.handle)) {
                const goName = rawName.substring(2, rawName.length - 1);
                const _time = Time.method("get_time").invoke();

                if (_time > buttonClickDelay) {
                    buttonClickDelay = _time + 0.2;
                    const button = getIndex(goName);
                    playButtonSound();
                    if (button) {
                        if (button.isTogglable) {
                            button.enabled = !button.enabled;
                            reloadMenu();
                            if (button.enabled) {
                                if (button.toolTip && buttonNotifications)
                                    sendNotification("<color=grey>[</color><color=green>ON</color><color=grey>]</color> " + button.toolTip, false);
                                button.enableMethod?.();
                            } else {
                                if (button.toolTip && buttonNotifications)
                                    sendNotification("<color=grey>[</color><color=red>OFF</color><color=grey>]</color> " + button.toolTip, false);
                                button.disableMethod?.();
                            }
                        } else {
                            reloadMenu();
                            if (button.toolTip && buttonNotifications)
                                sendNotification("<color=grey>[</color><color=green>OK</color><color=grey>]</color> " + button.toolTip, false);
                            button.method?.();
                        }
                    }
                }
            }
            return;
        }
        return this.method("OnTriggerEnter").invoke(collider);
    };



    // ─── Hook: weapon mods (now flag-driven) ──────────────────────────────────
    {
        const InfJetpack = AssemblyCSharp.class("AnimalCompany.JetpackHandy").method("RPC_UseJetpack");
        InfJetpack.implementation = function () {
            this.method("RPC_UseJetpack").invoke();
            if (infAmmoJetpack) this.field("_isUsed").value = false;
        };

        const InfFlare = AssemblyCSharp.class("AnimalCompany.FlareGun").method("get_hasAmmo");
        InfFlare.implementation = function () {
            return infAmmoFlare ? true : this.method("get_hasAmmo").invoke();
        };

        const InfZipline = AssemblyCSharp.class("AnimalCompany.ZiplineGun").method("get_isLoaded");
        InfZipline.implementation = function () {
            return infAmmoZipline ? true : this.method("get_isLoaded").invoke();
        };

        const InfAmmoRevolver = AssemblyCSharp.class("AnimalCompany.Revolver").method("get_ammoLoaded");
        InfAmmoRevolver.implementation = function () {
            return infAmmoRevolver ? 159 : this.method("get_ammoLoaded").invoke();
        };

        const CockedRevolver = AssemblyCSharp.class("AnimalCompany.Revolver").method("get_isHammerCocked");
        CockedRevolver.implementation = function () {
            return infAmmoRevolver ? true : this.method("get_isHammerCocked").invoke();
        };

        const InfAmmoRevolverArena = AssemblyCSharp.class("AnimalCompany.AutoReloadGun").method("get__ammoLeft");
        InfAmmoRevolverArena.implementation = function () {
            return infAmmoArena ? 159 : this.method("get__ammoLeft").invoke();
        };

        const ShotgunInfAmmo = AssemblyCSharp.class("AnimalCompany.Shotgun").method("get__ammoLeft");
        ShotgunInfAmmo.implementation = function () {
            return infAmmoShotgun ? 159 : this.method("get__ammoLeft").invoke();
        };

        const RPGInfAmmo = AssemblyCSharp.class("AnimalCompany.RPG").method("get_loadedState");
        RPGInfAmmo.implementation = function () {
            return infAmmoRPG ? [1, 2] : this.method("get_loadedState").invoke();
        };
    }

    // ─── Input ────────────────────────────────────────────────────────────────

    function updateInput() {
        const leftDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(4);
        const rightDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(5);
        const outBool = Il2Cpp.alloc(1);

        leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primaryButton").value, outBool);
        leftPrimary = outBool.readU8() !== 0;
        leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("secondaryButton").value, outBool);
        leftSecondary = outBool.readU8() !== 0;
        leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("gripButton").value, outBool);
        leftGrab = outBool.readU8() !== 0;
        leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("triggerButton").value, outBool);
        leftTrigger = outBool.readU8() !== 0;
        leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
        leftStick = outBool.readU8() !== 0;

        rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primaryButton").value, outBool);
        rightPrimary = outBool.readU8() !== 0;
        rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("secondaryButton").value, outBool);
        rightSecondary = outBool.readU8() !== 0;
        rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("triggerButton").value, outBool);
        rightTrigger = outBool.readU8() !== 0;
        rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("gripButton").value, outBool);
        rightGrab = outBool.readU8() !== 0;
        rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
        rightStick = outBool.readU8() !== 0;
    }

    // ─── Main loop ────────────────────────────────────────────────────────────

const LateUpdate = GTPlayer.method("OnLateUpdate");
let menuAnimTime: number = 0;

LateUpdate.implementation = function () {
    deltaTime = Time.method("get_deltaTime").invoke();
    time = Time.method("get_time").invoke();
    frameCount++;

    updateInput();

    updateOrbit();


    menuAnimTime += deltaTime;
    const pulse = (Math.sin(menuAnimTime * 2.5) * 0.5 + 0.5) * 0.12;
    bgColor = [0.35, 0.05, 0.05, 0.92];
    buttonColor = [0.45, 0.08, 0.08, 0.90];
    buttonPressedColor = [0.75, 0.12, 0.12, 0.95];
    textColor = [1.0, 0.85, 0.85, 1.0];
    
    if ((righthand && rightSecondary) || (!righthand && leftSecondary)) {
        if (currentNotification != "" && time > notifactionResetTime) reloadMenu();
        if (menu == null) { renderMenu(); } else { recenterMenu(); }
    } else {
        if (menu != null) { Destroy(menu); menu = null; }
    }

    if (menu == null) {
        if (reference != null) { Destroy(reference); reference = null; }
    } else {
        if (reference == null) renderReference();
    }

    buttons.flat()
        .filter(button => button.enabled)
        .forEach(button => {
            if (button.method) {
                try {
                    button.method();
                } catch (error) {
                    console.error(`Error in button '${button.buttonText}':`, error);
                }
            }
        });

    if (flyEnabled) updateFly();
    if (platformsEnabled) updatePlatforms();

    return LateUpdate.invoke();
};
    console.log(`
    Believes Skidded Menu ${version} loaded. if your seeing this it worked go use it
    Compiled ${new Date().toISOString()}
`);
}, "main");