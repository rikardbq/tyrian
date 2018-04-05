declare namespace com {
    namespace sun {
        namespace tools {
            namespace jconsole {
                abstract class JConsolePlugin {
                    protected constructor()
                    public setContext(arg0: com.sun.tools.jconsole.JConsoleContext): void
                    public getContext(): com.sun.tools.jconsole.JConsoleContext
                    public getTabs(): java.util.Map<java.lang.String, javax.swing.JPanel>
                    public newSwingWorker(): javax.swing.SwingWorker<any, any>
                    public dispose(): void
                    public addContextPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                    public removeContextPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                    public static class: java.lang.Class<any>
                }
                interface JConsoleContext {
                    CONNECTION_STATE_PROPERTY: java.lang.String
                    getMBeanServerConnection(): javax.management.MBeanServerConnection
                    getConnectionState(): com.sun.tools.jconsole.JConsoleContext$ConnectionState
                    addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                    removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                }
                class JConsoleContext$ConnectionState extends java.lang.Enum<com.sun.tools.jconsole.JConsoleContext$ConnectionState> {
                    public static CONNECTED: com.sun.tools.jconsole.JConsoleContext$ConnectionState
                    public static DISCONNECTED: com.sun.tools.jconsole.JConsoleContext$ConnectionState
                    public static CONNECTING: com.sun.tools.jconsole.JConsoleContext$ConnectionState
                    public static values(): com.sun.tools.jconsole.JConsoleContext$ConnectionState[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.tools.jconsole.JConsoleContext$ConnectionState
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace sun {
    namespace tools {
        namespace jconsole {
            class Version {
                public constructor()
                public static print(arg0: java.io.PrintStream): void
                public static printFullVersion(arg0: java.io.PrintStream): void
                public static class: java.lang.Class<any>
            }
            class AboutDialog extends sun.tools.jconsole.InternalDialog {
                public constructor(arg0: sun.tools.jconsole.JConsole)
                public showDialog(): void
                public static class: java.lang.Class<any>
            }
            class AboutDialog$TPanel extends javax.swing.JPanel {
                public static class: java.lang.Class<any>
            }
            class AboutDialog$2 extends javax.swing.AbstractAction {
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public static class: java.lang.Class<any>
            }
            class AboutDialog$1 implements javax.swing.event.HyperlinkListener {
                public hyperlinkUpdate(arg0: javax.swing.event.HyperlinkEvent): void
                public static class: java.lang.Class<any>
            }
            class ClassTab extends sun.tools.jconsole.Tab implements java.awt.event.ActionListener {
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public static class: java.lang.Class<any>
            }
            class ClassTab$ClassOverviewPanel extends sun.tools.jconsole.OverviewPanel {
                public static class: java.lang.Class<any>
            }
            class ClassTab$2 extends javax.swing.SwingWorker<java.lang.Boolean, java.lang.Object> {
                public doInBackground(): java.lang.Boolean
                protected done(): void
                public doInBackground(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class ClassTab$1 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ClassTab$1$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class LabeledComponent extends javax.swing.JPanel {
                public constructor(arg0: java.lang.String | string, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda)
                public constructor(arg0: java.lang.String | string, arg1: int, arg2: javax.swing.JComponent | javax.swing.JComponent$$Lambda)
                public setLabel(arg0: java.lang.String | string): void
                public setValueLabel(arg0: java.lang.String | string): void
                public static layout(arg0: java.awt.Container): void
                public static class: java.lang.Class<any>
            }
            class MemoryTab extends sun.tools.jconsole.Tab implements java.awt.event.ActionListener , java.awt.event.ItemListener {
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                public gc(): void
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public static class: java.lang.Class<any>
            }
            class MemoryTab$MemoryOverviewPanel extends sun.tools.jconsole.OverviewPanel {
                public static class: java.lang.Class<any>
            }
            class MemoryTab$PoolChart extends sun.tools.jconsole.BorderedComponent implements javax.accessibility.Accessible , java.awt.event.MouseListener {
                public constructor(arg0: sun.tools.jconsole.MemoryTab)
                public setValue(arg0: int, arg1: sun.tools.jconsole.MemoryTab$PoolPlotter, arg2: long, arg3: long, arg4: long): void
                public paintComponent(arg0: java.awt.Graphics): void
                public getPreferredSize(): java.awt.Dimension
                public mouseClicked(arg0: java.awt.event.MouseEvent): void
                public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public mouseReleased(arg0: java.awt.event.MouseEvent): void
                public mouseEntered(arg0: java.awt.event.MouseEvent): void
                public mouseExited(arg0: java.awt.event.MouseEvent): void
                public getAccessibleContext(): javax.accessibility.AccessibleContext
                public static class: java.lang.Class<any>
            }
            class MemoryTab$PoolChart$AccessiblePoolChart extends javax.swing.JPanel$AccessibleJPanel {
                protected constructor(arg0: sun.tools.jconsole.MemoryTab$PoolChart)
                public getAccessibleName(): java.lang.String
                public static class: java.lang.Class<any>
            }
            class MemoryTab$PoolPlotter extends sun.tools.jconsole.Plotter {
                public constructor(arg0: sun.tools.jconsole.MemoryTab, arg1: javax.management.ObjectName, arg2: java.lang.String | string, arg3: boolean)
                public toString(): java.lang.String
                public static class: java.lang.Class<any>
            }
            class MemoryTab$4 extends javax.swing.SwingWorker<java.lang.Boolean, java.lang.Object> {
                public doInBackground(): java.lang.Boolean
                protected done(): void
                public doInBackground(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class MemoryTab$3 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class MemoryTab$2 extends sun.tools.jconsole.Plotter {
                public toString(): java.lang.String
                public static class: java.lang.Class<any>
            }
            class MemoryTab$1 extends sun.tools.jconsole.Plotter {
                public toString(): java.lang.String
                public static class: java.lang.Class<any>
            }
            class Messages {
                public static ONE_DAY: java.lang.String
                public static ONE_HOUR: java.lang.String
                public static ONE_MIN: java.lang.String
                public static ONE_MONTH: java.lang.String
                public static ONE_YEAR: java.lang.String
                public static TWO_HOURS: java.lang.String
                public static THREE_HOURS: java.lang.String
                public static THREE_MONTHS: java.lang.String
                public static FIVE_MIN: java.lang.String
                public static SIX_HOURS: java.lang.String
                public static SIX_MONTHS: java.lang.String
                public static SEVEN_DAYS: java.lang.String
                public static TEN_MIN: java.lang.String
                public static TWELVE_HOURS: java.lang.String
                public static THIRTY_MIN: java.lang.String
                public static LESS_THAN: java.lang.String
                public static A_LOT_LESS_THAN: java.lang.String
                public static GREATER_THAN: java.lang.String
                public static ACTION_CAPITALIZED: java.lang.String
                public static ACTION_INFO_CAPITALIZED: java.lang.String
                public static ALL: java.lang.String
                public static ARCHITECTURE: java.lang.String
                public static ATTRIBUTE: java.lang.String
                public static ATTRIBUTE_VALUE: java.lang.String
                public static ATTRIBUTE_VALUES: java.lang.String
                public static ATTRIBUTES: java.lang.String
                public static BLANK: java.lang.String
                public static BLOCKED_COUNT_WAITED_COUNT: java.lang.String
                public static BOOT_CLASS_PATH: java.lang.String
                public static BORDERED_COMPONENT_MORE_OR_LESS_BUTTON_TOOLTIP: java.lang.String
                public static CPU_USAGE: java.lang.String
                public static CPU_USAGE_FORMAT: java.lang.String
                public static CANCEL: java.lang.String
                public static CASCADE: java.lang.String
                public static CHART_COLON: java.lang.String
                public static CLASS_PATH: java.lang.String
                public static CLASS_NAME: java.lang.String
                public static CLASS_TAB_INFO_LABEL_FORMAT: java.lang.String
                public static CLASS_TAB_LOADED_CLASSES_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static CLASSES: java.lang.String
                public static CLOSE: java.lang.String
                public static COLUMN_NAME: java.lang.String
                public static COLUMN_PID: java.lang.String
                public static COMMITTED_MEMORY: java.lang.String
                public static COMMITTED_VIRTUAL_MEMORY: java.lang.String
                public static COMMITTED: java.lang.String
                public static CONNECT: java.lang.String
                public static CONNECT_DIALOG_CONNECT_BUTTON_TOOLTIP: java.lang.String
                public static CONNECT_DIALOG_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static CONNECT_DIALOG_MASTHEAD_ACCESSIBLE_NAME: java.lang.String
                public static CONNECT_DIALOG_MASTHEAD_TITLE: java.lang.String
                public static CONNECT_DIALOG_STATUS_BAR_ACCESSIBLE_NAME: java.lang.String
                public static CONNECT_DIALOG_TITLE: java.lang.String
                public static CONNECTED_PUNCTUATION_CLICK_TO_DISCONNECT_: java.lang.String
                public static CONNECTION_FAILED: java.lang.String
                public static CONNECTION: java.lang.String
                public static CONNECTION_NAME: java.lang.String
                public static CONNECTION_NAME__DISCONNECTED_: java.lang.String
                public static CONSTRUCTOR: java.lang.String
                public static CURRENT_CLASSES_LOADED: java.lang.String
                public static CURRENT_HEAP_SIZE: java.lang.String
                public static CURRENT_VALUE: java.lang.String
                public static CREATE: java.lang.String
                public static DAEMON_THREADS: java.lang.String
                public static DISCONNECTED_PUNCTUATION_CLICK_TO_CONNECT_: java.lang.String
                public static DOUBLE_CLICK_TO_EXPAND_FORWARD_SLASH_COLLAPSE: java.lang.String
                public static DOUBLE_CLICK_TO_VISUALIZE: java.lang.String
                public static DESCRIPTION: java.lang.String
                public static DESCRIPTOR: java.lang.String
                public static DETAILS: java.lang.String
                public static DETECT_DEADLOCK: java.lang.String
                public static DETECT_DEADLOCK_TOOLTIP: java.lang.String
                public static DIMENSION_IS_NOT_SUPPORTED_COLON: java.lang.String
                public static DISCARD_CHART: java.lang.String
                public static DURATION_DAYS_HOURS_MINUTES: java.lang.String
                public static DURATION_HOURS_MINUTES: java.lang.String
                public static DURATION_MINUTES: java.lang.String
                public static DURATION_SECONDS: java.lang.String
                public static EMPTY_ARRAY: java.lang.String
                public static ERROR: java.lang.String
                public static ERROR_COLON_MBEANS_ALREADY_EXIST: java.lang.String
                public static ERROR_COLON_MBEANS_DO_NOT_EXIST: java.lang.String
                public static EVENT: java.lang.String
                public static EXIT: java.lang.String
                public static FAIL_TO_LOAD_PLUGIN: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_CANCEL_OPTION: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_MESSAGE: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_OK_OPTION: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_TITLE: java.lang.String
                public static FILE_CHOOSER_SAVED_FILE: java.lang.String
                public static FILE_CHOOSER_SAVE_FAILED_MESSAGE: java.lang.String
                public static FILE_CHOOSER_SAVE_FAILED_TITLE: java.lang.String
                public static FREE_PHYSICAL_MEMORY: java.lang.String
                public static FREE_SWAP_SPACE: java.lang.String
                public static GARBAGE_COLLECTOR: java.lang.String
                public static GC_INFO: java.lang.String
                public static GC_TIME: java.lang.String
                public static GC_TIME_DETAILS: java.lang.String
                public static HEAP_MEMORY_USAGE: java.lang.String
                public static HEAP: java.lang.String
                public static HELP_ABOUT_DIALOG_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static HELP_ABOUT_DIALOG_JCONSOLE_VERSION: java.lang.String
                public static HELP_ABOUT_DIALOG_JAVA_VERSION: java.lang.String
                public static HELP_ABOUT_DIALOG_MASTHEAD_ACCESSIBLE_NAME: java.lang.String
                public static HELP_ABOUT_DIALOG_MASTHEAD_TITLE: java.lang.String
                public static HELP_ABOUT_DIALOG_TITLE: java.lang.String
                public static HELP_ABOUT_DIALOG_USER_GUIDE_LINK_URL: java.lang.String
                public static HELP_MENU_ABOUT_TITLE: java.lang.String
                public static HELP_MENU_USER_GUIDE_TITLE: java.lang.String
                public static HELP_MENU_TITLE: java.lang.String
                public static HOTSPOT_MBEANS_ELLIPSIS: java.lang.String
                public static HOTSPOT_MBEANS_DIALOG_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static IMPACT: java.lang.String
                public static INFO: java.lang.String
                public static INFO_CAPITALIZED: java.lang.String
                public static INSECURE: java.lang.String
                public static INVALID_PLUGIN_PATH: java.lang.String
                public static INVALID_URL: java.lang.String
                public static IS: java.lang.String
                public static JAVA_MONITORING___MANAGEMENT_CONSOLE: java.lang.String
                public static JCONSOLE_COLON_: java.lang.String
                public static JCONSOLE_VERSION: java.lang.String
                public static JCONSOLE_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static JIT_COMPILER: java.lang.String
                public static LIBRARY_PATH: java.lang.String
                public static LIVE_THREADS: java.lang.String
                public static LOADED: java.lang.String
                public static LOCAL_PROCESS_COLON: java.lang.String
                public static MASTHEAD_FONT: java.lang.String
                public static MANAGEMENT_NOT_ENABLED: java.lang.String
                public static MANAGEMENT_WILL_BE_ENABLED: java.lang.String
                public static MBEAN_ATTRIBUTE_INFO: java.lang.String
                public static MBEAN_INFO: java.lang.String
                public static MBEAN_NOTIFICATION_INFO: java.lang.String
                public static MBEAN_OPERATION_INFO: java.lang.String
                public static MBEANS: java.lang.String
                public static MBEANS_TAB_CLEAR_NOTIFICATIONS_BUTTON: java.lang.String
                public static MBEANS_TAB_CLEAR_NOTIFICATIONS_BUTTON_TOOLTIP: java.lang.String
                public static MBEANS_TAB_COMPOSITE_NAVIGATION_MULTIPLE: java.lang.String
                public static MBEANS_TAB_COMPOSITE_NAVIGATION_SINGLE: java.lang.String
                public static MBEANS_TAB_REFRESH_ATTRIBUTES_BUTTON: java.lang.String
                public static MBEANS_TAB_REFRESH_ATTRIBUTES_BUTTON_TOOLTIP: java.lang.String
                public static MBEANS_TAB_SUBSCRIBE_NOTIFICATIONS_BUTTON: java.lang.String
                public static MBEANS_TAB_SUBSCRIBE_NOTIFICATIONS_BUTTON_TOOLTIP: java.lang.String
                public static MBEANS_TAB_TABULAR_NAVIGATION_MULTIPLE: java.lang.String
                public static MBEANS_TAB_TABULAR_NAVIGATION_SINGLE: java.lang.String
                public static MBEANS_TAB_UNSUBSCRIBE_NOTIFICATIONS_BUTTON: java.lang.String
                public static MBEANS_TAB_UNSUBSCRIBE_NOTIFICATIONS_BUTTON_TOOLTIP: java.lang.String
                public static MANAGE_HOTSPOT_MBEANS_IN_COLON_: java.lang.String
                public static MAX: java.lang.String
                public static MAXIMUM_HEAP_SIZE: java.lang.String
                public static MEMORY: java.lang.String
                public static MEMORY_POOL_LABEL: java.lang.String
                public static MEMORY_TAB_HEAP_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static MEMORY_TAB_INFO_LABEL_FORMAT: java.lang.String
                public static MEMORY_TAB_NON_HEAP_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static MEMORY_TAB_POOL_CHART_ABOVE_THRESHOLD: java.lang.String
                public static MEMORY_TAB_POOL_CHART_ACCESSIBLE_NAME: java.lang.String
                public static MEMORY_TAB_POOL_CHART_BELOW_THRESHOLD: java.lang.String
                public static MEMORY_TAB_POOL_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static MESSAGE: java.lang.String
                public static METHOD_SUCCESSFULLY_INVOKED: java.lang.String
                public static MINIMIZE_ALL: java.lang.String
                public static MONITOR_LOCKED: java.lang.String
                public static NAME: java.lang.String
                public static NAME_STATE: java.lang.String
                public static NAME_STATE_LOCK_NAME: java.lang.String
                public static NAME_STATE_LOCK_NAME_LOCK_OWNER: java.lang.String
                public static NAME_AND_BUILD: java.lang.String
                public static NEW_CONNECTION_ELLIPSIS: java.lang.String
                public static NO_DEADLOCK_DETECTED: java.lang.String
                public static NON_HEAP_MEMORY_USAGE: java.lang.String
                public static NON_HEAP: java.lang.String
                public static NOTIFICATION: java.lang.String
                public static NOTIFICATION_BUFFER: java.lang.String
                public static NOTIFICATIONS: java.lang.String
                public static NOTIF_TYPES: java.lang.String
                public static NUMBER_OF_THREADS: java.lang.String
                public static NUMBER_OF_LOADED_CLASSES: java.lang.String
                public static NUMBER_OF_PROCESSORS: java.lang.String
                public static OBJECT_NAME: java.lang.String
                public static OPERATING_SYSTEM: java.lang.String
                public static OPERATION: java.lang.String
                public static OPERATION_INVOCATION: java.lang.String
                public static OPERATION_RETURN_VALUE: java.lang.String
                public static OPERATIONS: java.lang.String
                public static OVERVIEW: java.lang.String
                public static OVERVIEW_PANEL_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static PARAMETER: java.lang.String
                public static PASSWORD_COLON_: java.lang.String
                public static PASSWORD_ACCESSIBLE_NAME: java.lang.String
                public static PEAK: java.lang.String
                public static PERFORM_GC: java.lang.String
                public static PERFORM_GC_TOOLTIP: java.lang.String
                public static PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static PLOTTER_ACCESSIBLE_NAME_KEY_AND_VALUE: java.lang.String
                public static PLOTTER_ACCESSIBLE_NAME_NO_DATA: java.lang.String
                public static PLOTTER_SAVE_AS_MENU_ITEM: java.lang.String
                public static PLOTTER_TIME_RANGE_MENU: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_BUTTON_EXIT: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_BUTTON_IGNORE: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_BUTTON_OK: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_MESSAGE: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_TITLE: java.lang.String
                public static PROBLEM_ADDING_LISTENER: java.lang.String
                public static PROBLEM_DISPLAYING_MBEAN: java.lang.String
                public static PROBLEM_INVOKING: java.lang.String
                public static PROBLEM_REMOVING_LISTENER: java.lang.String
                public static PROBLEM_SETTING_ATTRIBUTE: java.lang.String
                public static PROCESS_CPU_TIME: java.lang.String
                public static READABLE: java.lang.String
                public static RECONNECT: java.lang.String
                public static REMOTE_PROCESS_COLON: java.lang.String
                public static REMOTE_PROCESS_TEXT_FIELD_ACCESSIBLE_NAME: java.lang.String
                public static RESTORE_ALL: java.lang.String
                public static RETURN_TYPE: java.lang.String
                public static SEQ_NUM: java.lang.String
                public static SIZE_BYTES: java.lang.String
                public static SIZE_GB: java.lang.String
                public static SIZE_KB: java.lang.String
                public static SIZE_MB: java.lang.String
                public static SOURCE: java.lang.String
                public static STACK_TRACE: java.lang.String
                public static SUMMARY_TAB_HEADER_DATE_TIME_FORMAT: java.lang.String
                public static SUMMARY_TAB_PENDING_FINALIZATION_LABEL: java.lang.String
                public static SUMMARY_TAB_PENDING_FINALIZATION_VALUE: java.lang.String
                public static SUMMARY_TAB_TAB_NAME: java.lang.String
                public static SUMMARY_TAB_VM_VERSION: java.lang.String
                public static THREADS: java.lang.String
                public static THREAD_TAB_INFO_LABEL_FORMAT: java.lang.String
                public static THREAD_TAB_THREAD_INFO_ACCESSIBLE_NAME: java.lang.String
                public static THREAD_TAB_THREAD_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static THREAD_TAB_INITIAL_STACK_TRACE_MESSAGE: java.lang.String
                public static THRESHOLD: java.lang.String
                public static TILE: java.lang.String
                public static TIME_RANGE_COLON: java.lang.String
                public static TIME: java.lang.String
                public static TIME_STAMP: java.lang.String
                public static TOTAL_LOADED: java.lang.String
                public static TOTAL_CLASSES_LOADED: java.lang.String
                public static TOTAL_CLASSES_UNLOADED: java.lang.String
                public static TOTAL_COMPILE_TIME: java.lang.String
                public static TOTAL_PHYSICAL_MEMORY: java.lang.String
                public static TOTAL_THREADS_STARTED: java.lang.String
                public static TOTAL_SWAP_SPACE: java.lang.String
                public static TYPE: java.lang.String
                public static UNAVAILABLE: java.lang.String
                public static UNKNOWN_CAPITALIZED: java.lang.String
                public static UNKNOWN_HOST: java.lang.String
                public static UNREGISTER: java.lang.String
                public static UPTIME: java.lang.String
                public static USAGE_THRESHOLD: java.lang.String
                public static REMOTE_TF_USAGE: java.lang.String
                public static USED: java.lang.String
                public static USERNAME_COLON_: java.lang.String
                public static USERNAME_ACCESSIBLE_NAME: java.lang.String
                public static USER_DATA: java.lang.String
                public static VIRTUAL_MACHINE: java.lang.String
                public static VM_ARGUMENTS: java.lang.String
                public static VMINTERNAL_FRAME_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static VALUE: java.lang.String
                public static VENDOR: java.lang.String
                public static VERBOSE_OUTPUT: java.lang.String
                public static VERBOSE_OUTPUT_TOOLTIP: java.lang.String
                public static VIEW: java.lang.String
                public static WINDOW: java.lang.String
                public static WINDOWS: java.lang.String
                public static WRITABLE: java.lang.String
                public static CONNECTION_FAILED1: java.lang.String
                public static CONNECTION_FAILED2: java.lang.String
                public static CONNECTION_FAILED_SSL1: java.lang.String
                public static CONNECTION_FAILED_SSL2: java.lang.String
                public static CONNECTION_LOST1: java.lang.String
                public static CONNECTING_TO1: java.lang.String
                public static CONNECTING_TO2: java.lang.String
                public static DEADLOCK_TAB: java.lang.String
                public static DEADLOCK_TAB_N: java.lang.String
                public static EXPAND: java.lang.String
                public static KBYTES: java.lang.String
                public static PLOT: java.lang.String
                public static VISUALIZE: java.lang.String
                public static ZZ_USAGE_TEXT: java.lang.String
                public constructor()
                public static class: java.lang.Class<any>
            }
            class OutputViewer {
                public constructor()
                public static init(): void
                public static class: java.lang.Class<any>
            }
            class OutputViewer$PipeListener extends java.lang.Thread {
                public ps: java.io.PrintStream
                public static create(arg0: java.lang.String | string): java.io.PrintStream
                public run(): void
                public static class: java.lang.Class<any>
            }
            class OutputViewer$1 extends java.awt.event.WindowAdapter {
                public windowClosing(arg0: java.awt.event.WindowEvent): void
                public static class: java.lang.Class<any>
            }
            class OverviewTab extends sun.tools.jconsole.Tab {
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public static class: java.lang.Class<any>
            }
            class OverviewTab$AutoGridLayout extends java.awt.GridLayout {
                public constructor(arg0: sun.tools.jconsole.OverviewTab, arg1: int, arg2: int)
                public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
                public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class OverviewTab$1 extends javax.swing.SwingWorker<java.lang.Object, java.lang.Object> {
                public doInBackground(): java.lang.Object
                protected done(): void
                public static class: java.lang.Class<any>
            }
            class OverviewTab$1$1 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class OverviewTab$1$1$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class Resources {
                public static format(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.lang.String
                public static getMnemonicInt(arg0: java.lang.String | string): int
                public static initializeMessages(arg0: java.lang.Class<any>, arg1: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
            class SheetDialog {
                public static class: java.lang.Class<any>
            }
            class SheetDialog$SheetOptionPane extends javax.swing.JOptionPane {
                public setVisible(arg0: boolean): void
                public paint(arg0: java.awt.Graphics): void
                public static class: java.lang.Class<any>
            }
            class SheetDialog$SlideAndFadeGlassPane extends javax.swing.JPanel {
                public show(arg0: sun.tools.jconsole.SheetDialog$SheetOptionPane): void
                public hide(arg0: sun.tools.jconsole.SheetDialog$SheetOptionPane): void
                public setGrayLevel(arg0: int): void
                public paint(arg0: java.awt.Graphics): void
                public static class: java.lang.Class<any>
            }
            class SheetDialog$SlideAndFadeGlassPane$1 extends java.awt.event.MouseAdapter {
                public static class: java.lang.Class<any>
            }
            class SheetDialog$3 extends javax.swing.JLabel {
                public getPreferredSize(): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class SheetDialog$2 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class SheetDialog$2$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class SheetDialog$1 implements java.beans.PropertyChangeListener {
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public static class: java.lang.Class<any>
            }
            class HTMLPane extends javax.swing.JEditorPane {
                public constructor()
                public setHasSelection(arg0: boolean): void
                public getHasSelection(): boolean
                public setText(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
            class HTMLPane$1 implements javax.swing.event.CaretListener {
                public caretUpdate(arg0: javax.swing.event.CaretEvent): void
                public static class: java.lang.Class<any>
            }
            class SummaryTab extends sun.tools.jconsole.Tab {
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public static class: java.lang.Class<any>
            }
            class SummaryTab$CPUOverviewPanel extends sun.tools.jconsole.OverviewPanel {
                public updateCPUInfo(arg0: sun.tools.jconsole.SummaryTab$Result): void
                public static class: java.lang.Class<any>
            }
            class SummaryTab$1 extends javax.swing.SwingWorker<sun.tools.jconsole.SummaryTab$Result, java.lang.Object> {
                public doInBackground(): sun.tools.jconsole.SummaryTab$Result
                protected done(): void
                public doInBackground(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class SummaryTab$Result {
                public static class: java.lang.Class<any>
            }
            class ThreadTab extends sun.tools.jconsole.Tab implements java.awt.event.ActionListener , javax.swing.event.DocumentListener , javax.swing.event.ListSelectionListener {
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
                public getDeadlockedThreadIds(): java.lang.Long[][]
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
                public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
                public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$ThreadOverviewPanel extends sun.tools.jconsole.OverviewPanel {
                public static class: java.lang.Class<any>
            }
            class ThreadTab$PromptingTextField extends javax.swing.JTextField implements java.awt.event.FocusListener {
                public constructor(arg0: sun.tools.jconsole.ThreadTab, arg1: java.lang.String | string, arg2: int)
                public revalidate(): void
                public getText(): java.lang.String
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$ThreadJList extends javax.swing.JList<java.lang.Long> {
                public getPreferredSize(): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class ThreadTab$ThreadJList$1 extends javax.swing.DefaultListCellRenderer {
                public getListCellRendererComponent(arg0: javax.swing.JList<any> | javax.swing.JList$$Lambda<any>, arg1: java.lang.Object, arg2: int, arg3: boolean, arg4: boolean): java.awt.Component
                public static class: java.lang.Class<any>
            }
            class ThreadTab$4 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$4$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ThreadTab$4$2 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$4$2$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ThreadTab$4$1 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$4$1$2 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$4$1$2$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ThreadTab$4$1$1 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$4$1$1$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ThreadTab$3 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$3$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ThreadTab$2 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$2$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ThreadTab$2$1 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ThreadTab$2$1$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ThreadTab$1 extends javax.swing.SwingWorker<java.lang.Boolean, java.lang.Object> {
                public doInBackground(): java.lang.Boolean
                protected done(): void
                public doInBackground(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class TimeComboBox extends javax.swing.JComboBox implements java.awt.event.ItemListener , java.beans.PropertyChangeListener {
                public constructor(...arg0: sun.tools.jconsole.Plotter[])
                public addPlotter(arg0: sun.tools.jconsole.Plotter): void
                public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public static class: java.lang.Class<any>
            }
            class VariableGridLayout extends java.awt.GridLayout {
                public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean, arg5: boolean)
                public setFillRow(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: boolean): void
                public setFillColumn(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: boolean): void
                public getFillRow(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): boolean
                public getFillColumn(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): boolean
                public layoutContainer(arg0: java.awt.Container): void
                public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class CreateMBeanDialog extends sun.tools.jconsole.InternalDialog implements java.awt.event.ActionListener {
                public constructor(arg0: sun.tools.jconsole.JConsole)
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public setVisible(arg0: boolean): void
                public static class: java.lang.Class<any>
            }
            class CreateMBeanDialog$3 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class CreateMBeanDialog$3$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class CreateMBeanDialog$2 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class CreateMBeanDialog$1 implements java.util.Comparator<sun.tools.jconsole.ProxyClient> {
                public compare(arg0: sun.tools.jconsole.ProxyClient, arg1: sun.tools.jconsole.ProxyClient): int
                public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
            class InternalDialog extends javax.swing.JInternalFrame {
                protected statusBar: javax.swing.JLabel
                public constructor(arg0: sun.tools.jconsole.JConsole, arg1: java.lang.String | string, arg2: boolean)
                public setLocationRelativeTo(arg0: java.awt.Component): void
                public static class: java.lang.Class<any>
            }
            class InternalDialog$MastheadIcon implements javax.swing.Icon {
                public constructor(arg0: sun.tools.jconsole.InternalDialog, arg1: java.lang.String | string)
                public paintIcon(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int): void
                public getIconWidth(): int
                public getIconHeight(): int
                public static class: java.lang.Class<any>
            }
            class InternalDialog$1 extends javax.swing.AbstractAction {
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public static class: java.lang.Class<any>
            }
            class ConnectDialog extends sun.tools.jconsole.InternalDialog implements javax.swing.event.DocumentListener , java.awt.event.FocusListener , java.awt.event.ItemListener , javax.swing.event.ListSelectionListener , java.awt.event.KeyListener {
                public constructor(arg0: sun.tools.jconsole.JConsole)
                public revalidate(): void
                public static getLabelWidth(arg0: java.lang.String | string): int
                public setConnectionParameters(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): void
                public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
                public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
                public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public keyTyped(arg0: java.awt.event.KeyEvent): void
                public setVisible(arg0: boolean): void
                public keyPressed(arg0: java.awt.event.KeyEvent): void
                public keyReleased(arg0: java.awt.event.KeyEvent): void
                public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
                public refresh(): void
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$Padder extends javax.swing.JPanel {
                public getPreferredSize(): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$ManagedVmTableModel extends javax.swing.table.AbstractTableModel {
                public getColumnCount(): int
                public getColumnName(arg0: int): java.lang.String
                public getRowCount(): int
                public getValueAt(arg0: int, arg1: int): java.lang.Object
                public getColumnClass(arg0: int): java.lang.Class<any>
                public constructor()
                public vmAt(arg0: int): sun.tools.jconsole.LocalVirtualMachine
                public refresh(): void
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$4 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$4$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class ConnectDialog$LocalTabJTable extends javax.swing.JTable {
                public constructor(arg0: sun.tools.jconsole.ConnectDialog, arg1: sun.tools.jconsole.ConnectDialog$ManagedVmTableModel)
                public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
                public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$LocalTabJTable$2 extends javax.swing.table.DefaultTableCellRenderer {
                public getTableCellRendererComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: int, arg5: int): java.awt.Component
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$LocalTabJTable$1 extends java.awt.event.MouseAdapter {
                public mouseClicked(arg0: java.awt.event.MouseEvent): void
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$3 extends javax.swing.AbstractAction {
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$2 extends javax.swing.AbstractAction {
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public static class: java.lang.Class<any>
            }
            class ConnectDialog$1 extends javax.swing.AbstractAction {
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public static class: java.lang.Class<any>
            }
            class Plotter extends javax.swing.JComponent implements javax.accessibility.Accessible , java.awt.event.ActionListener , java.beans.PropertyChangeListener {
                public constructor()
                public constructor(arg0: sun.tools.jconsole.Plotter$Unit)
                public constructor(arg0: sun.tools.jconsole.Plotter$Unit, arg1: int)
                public constructor(arg0: sun.tools.jconsole.Plotter$Unit, arg1: int, arg2: boolean)
                public setUnit(arg0: sun.tools.jconsole.Plotter$Unit): void
                public setDecimals(arg0: int): void
                public createSequence(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.awt.Color, arg3: boolean): void
                public setUseDashedTransitions(arg0: java.lang.String | string, arg1: boolean): void
                public setIsPlotted(arg0: java.lang.String | string, arg1: boolean): void
                public addValues(arg0: long, ...arg1: long[]): void
                public getViewRange(): int
                public setViewRange(arg0: int): void
                public getComponentPopupMenu(): javax.swing.JPopupMenu
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public paintComponent(arg0: java.awt.Graphics): void
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public getAccessibleContext(): javax.accessibility.AccessibleContext
                public static class: java.lang.Class<any>
            }
            class Plotter$2 {
                public static class: java.lang.Class<any>
            }
            class Plotter$AccessiblePlotter extends javax.swing.JComponent$AccessibleJComponent {
                protected constructor(arg0: sun.tools.jconsole.Plotter)
                public getAccessibleName(): java.lang.String
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                public static class: java.lang.Class<any>
            }
            class Plotter$SaveDataFileChooser extends javax.swing.JFileChooser {
                public approveSelection(): void
                public static class: java.lang.Class<any>
            }
            class Plotter$Sequence {
                public constructor(arg0: java.lang.String | string)
                public value(arg0: int): long
                public add(arg0: long): void
                public static class: java.lang.Class<any>
            }
            class Plotter$TimeStamps {
                public time(arg0: int): long
                public add(arg0: long): void
                public static class: java.lang.Class<any>
            }
            class Plotter$1 extends java.awt.event.MouseAdapter {
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public static class: java.lang.Class<any>
            }
            class Plotter$Unit extends java.lang.Enum<sun.tools.jconsole.Plotter$Unit> {
                public static NONE: sun.tools.jconsole.Plotter$Unit
                public static BYTES: sun.tools.jconsole.Plotter$Unit
                public static PERCENT: sun.tools.jconsole.Plotter$Unit
                public static values(): sun.tools.jconsole.Plotter$Unit[]
                public static valueOf(arg0: java.lang.String | string): sun.tools.jconsole.Plotter$Unit
                public static class: java.lang.Class<any>
            }
            class Formatter {
                public static class: java.lang.Class<any>
            }
            class MemoryPoolStat {
                public getPoolName(): java.lang.String
                public getUsage(): java.lang.management.MemoryUsage
                public getUsageThreshold(): long
                public getCollectionUsageThreshold(): long
                public getLastGcId(): long
                public getLastGcStartTime(): long
                public getLastGcEndTime(): long
                public getBeforeGcUsage(): java.lang.management.MemoryUsage
                public getAfterGcUsage(): java.lang.management.MemoryUsage
                public static class: java.lang.Class<any>
            }
            class ExceptionSafePlugin extends com.sun.tools.jconsole.JConsolePlugin {
                public constructor(arg0: com.sun.tools.jconsole.JConsolePlugin)
                public getTabs(): java.util.Map<java.lang.String, javax.swing.JPanel>
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public dispose(): void
                public executeSwingWorker(arg0: javax.swing.SwingWorker<any, any>): void
                public static class: java.lang.Class<any>
            }
            class MaximizableInternalFrame extends javax.swing.JInternalFrame {
                public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean)
                public updateUI(): void
                public setTitle(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
            class MaximizableInternalFrame$MDIButtonIcon implements javax.swing.Icon {
                public paintIcon(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int): void
                public getIconWidth(): int
                public getIconHeight(): int
                public static class: java.lang.Class<any>
            }
            class MaximizableInternalFrame$FixedMenuBarLayout extends javax.swing.BoxLayout {
                public constructor(arg0: sun.tools.jconsole.MaximizableInternalFrame, arg1: java.awt.Container, arg2: int)
                public layoutContainer(arg0: java.awt.Container): void
                public static class: java.lang.Class<any>
            }
            class MaximizableInternalFrame$1 implements java.beans.PropertyChangeListener {
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public static class: java.lang.Class<any>
            }
            class VMInternalFrame extends sun.tools.jconsole.MaximizableInternalFrame {
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public getVMPanel(): sun.tools.jconsole.VMPanel
                public getPreferredSize(): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class BorderedComponent extends javax.swing.JPanel implements java.awt.event.ActionListener {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda)
                public constructor(arg0: java.lang.String | string, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: boolean)
                public setComponent(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                public setValueLabel(arg0: java.lang.String | string): void
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public getMinimumSize(): java.awt.Dimension
                public doLayout(): void
                public static class: java.lang.Class<any>
            }
            class BorderedComponent$FocusBorder extends javax.swing.border.AbstractBorder implements java.awt.event.FocusListener {
                public constructor(arg0: java.awt.Component)
                public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public static class: java.lang.Class<any>
            }
            class BorderedComponent$LabeledBorder extends javax.swing.border.TitledBorder {
                protected label: javax.swing.JComponent
                public constructor(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda)
                public constructor(arg0: javax.swing.border.Border)
                public constructor(arg0: javax.swing.border.Border, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda)
                public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
                public getLabel(): javax.swing.JComponent
                public setLabel(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                public getMinimumSize(arg0: java.awt.Component): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class BorderedComponent$ArrowIcon implements javax.swing.Icon {
                public constructor(arg0: int, arg1: javax.swing.JLabel | javax.swing.JLabel$$Lambda)
                public paintIcon(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int): void
                public getIconWidth(): int
                public getIconHeight(): int
                public static class: java.lang.Class<any>
            }
            class BorderedComponent$1 extends javax.swing.JPanel {
                public getBaseline(arg0: int, arg1: int): int
                public static class: java.lang.Class<any>
            }
            class PlotterPanel extends sun.tools.jconsole.BorderedComponent {
                public constructor(arg0: java.lang.String | string, arg1: sun.tools.jconsole.Plotter$Unit, arg2: boolean)
                public constructor(arg0: java.lang.String | string)
                public getPlotter(): sun.tools.jconsole.Plotter
                public setPlotter(arg0: sun.tools.jconsole.Plotter): void
                public getComponentPopupMenu(): javax.swing.JPopupMenu
                public getAccessibleContext(): javax.accessibility.AccessibleContext
                public static class: java.lang.Class<any>
            }
            class PlotterPanel$AccessiblePlotterPanel extends javax.swing.JComponent$AccessibleJComponent {
                protected constructor(arg0: sun.tools.jconsole.PlotterPanel)
                public getAccessibleName(): java.lang.String
                public static class: java.lang.Class<any>
            }
            class PlotterPanel$1 extends java.awt.event.MouseAdapter {
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public static class: java.lang.Class<any>
            }
            abstract class OverviewPanel extends sun.tools.jconsole.PlotterPanel {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: sun.tools.jconsole.Plotter$Unit)
                public getInfoLabel(): javax.swing.JLabel
                public static class: java.lang.Class<any>
            }
            class OverviewPanel$1 extends javax.swing.JLabel {
                public setText(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
            class JConsole extends javax.swing.JFrame implements java.awt.event.ActionListener , javax.swing.event.InternalFrameListener {
                public static ROOT_URL: java.lang.String
                public constructor(arg0: boolean)
                public getDesktopPane(): javax.swing.JDesktopPane
                public getInternalFrames(): java.util.List<sun.tools.jconsole.VMInternalFrame>
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public tileWindows(): void
                public cascadeWindows(): void
                public internalFrameClosing(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameOpened(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameClosed(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameIconified(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameDeiconified(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameActivated(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameDeactivated(arg0: javax.swing.event.InternalFrameEvent): void
                public static main(arg0: java.lang.String[]): void
                public static isDebug(): boolean
                public static isLocalAttachAvailable(): boolean
                public static class: java.lang.Class<any>
            }
            class JConsole$FixedJRootPane extends javax.swing.JRootPane {
                public updateUI(): void
                public revalidate(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$6 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$6$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class JConsole$5 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$5$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class JConsole$4 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$4$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class JConsole$4$1 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$4$1$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class JConsole$3 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$3$1 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$3$1$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class JConsole$2 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$1 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class JConsole$WindowMenu extends javax.swing.JMenu {
                public static class: java.lang.Class<any>
            }
            class Utilities {
                public constructor()
                public static updateTransparency(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                public static newTableScrollPane(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.JScrollPane
                public static setAccessibleName(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda, arg1: java.lang.String | string): void
                public static setAccessibleDescription(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda, arg1: java.lang.String | string): void
                public static ensureContrast(arg0: java.awt.Color, arg1: java.awt.Color): java.awt.Color
                public static getColorBrightness(arg0: java.awt.Color): double
                public static class: java.lang.Class<any>
            }
            class Utilities$TableScrollPane extends javax.swing.JScrollPane {
                public constructor(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda)
                protected paintBorder(arg0: java.awt.Graphics): void
                public static class: java.lang.Class<any>
            }
            class Worker extends java.lang.Thread {
                public constructor(arg0: java.lang.String | string)
                public run(): void
                public stopWorker(): void
                public add(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public queueFull(): boolean
                public static class: java.lang.Class<any>
            }
            class MemoryPoolProxy {
                public constructor(arg0: sun.tools.jconsole.ProxyClient, arg1: javax.management.ObjectName)
                public isCollectedMemoryPool(): boolean
                public getStat(): sun.tools.jconsole.MemoryPoolStat
                public static class: java.lang.Class<any>
            }
            class LocalVirtualMachine {
                public constructor(arg0: int, arg1: java.lang.String | string, arg2: boolean, arg3: java.lang.String | string)
                public vmid(): int
                public isManageable(): boolean
                public isAttachable(): boolean
                public startManagementAgent(): void
                public connectorAddress(): java.lang.String
                public displayName(): java.lang.String
                public toString(): java.lang.String
                public static getAllVirtualMachines(): java.util.Map<java.lang.Integer, sun.tools.jconsole.LocalVirtualMachine>
                public static getLocalVirtualMachine(arg0: int): sun.tools.jconsole.LocalVirtualMachine
                public static class: java.lang.Class<any>
            }
            class VMPanel extends javax.swing.JTabbedPane implements java.beans.PropertyChangeListener {
                public static getTabInfos(): sun.tools.jconsole.VMPanel$TabInfo[]
                public setUI(arg0: javax.swing.plaf.TabbedPaneUI): void
                protected paintComponent(arg0: java.awt.Graphics): void
                public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
                public removeTabAt(arg0: int): void
                public getUpdateInterval(): int
                public getProxyClient(): sun.tools.jconsole.ProxyClient
                public cleanUp(): void
                public connect(): void
                public disconnect(): void
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public getHostName(): java.lang.String
                public getPort(): int
                public getUserName(): java.lang.String
                public getUrl(): java.lang.String
                public getPassword(): java.lang.String
                public getConnectionName(): java.lang.String
                public getDisplayName(): java.lang.String
                public static class: java.lang.Class<any>
            }
            class VMPanel$10 {
                public static class: java.lang.Class<any>
            }
            class VMPanel$TabInfo {
                public static class: java.lang.Class<any>
            }
            class VMPanel$9 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$9$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class VMPanel$8 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$8$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class VMPanel$7 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$7$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class VMPanel$6 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$6$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class VMPanel$5 implements java.beans.PropertyChangeListener {
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$4 extends java.util.TimerTask {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$3 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$3$1 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$3$1$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class VMPanel$2 extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class VMPanel$1 extends java.awt.event.MouseAdapter {
                public mouseClicked(arg0: java.awt.event.MouseEvent): void
                public static class: java.lang.Class<any>
            }
            abstract class Tab extends javax.swing.JPanel {
                protected vmPanel: sun.tools.jconsole.VMPanel
                public constructor(arg0: sun.tools.jconsole.VMPanel, arg1: java.lang.String | string)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public update(): void
                public dispose(): void
                protected getVMPanel(): sun.tools.jconsole.VMPanel
                public workerAdd(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public getPreferredSize(): java.awt.Dimension
                public static class: java.lang.Class<any>
            }
            class MBeansTab extends sun.tools.jconsole.Tab implements javax.management.NotificationListener , java.beans.PropertyChangeListener , javax.swing.event.TreeSelectionListener , javax.swing.event.TreeWillExpandListener {
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public getDataViewer(): sun.tools.jconsole.inspector.XDataViewer
                public getTree(): sun.tools.jconsole.inspector.XTree
                public getSheet(): sun.tools.jconsole.inspector.XSheet
                public dispose(): void
                public getUpdateInterval(): int
                public getMBeanServerConnection(): javax.management.MBeanServerConnection
                public getSnapshotMBeanServerConnection(): sun.tools.jconsole.ProxyClient$SnapshotMBeanServerConnection
                public update(): void
                public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public valueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
                public treeWillExpand(arg0: javax.swing.event.TreeExpansionEvent): void
                public treeWillCollapse(arg0: javax.swing.event.TreeExpansionEvent): void
                public static class: java.lang.Class<any>
            }
            class MBeansTab$3 extends java.awt.event.MouseAdapter {
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public static class: java.lang.Class<any>
            }
            class MBeansTab$2 implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class MBeansTab$2$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class MBeansTab$1 extends javax.swing.SwingWorker<java.util.Set<javax.management.ObjectName>, java.lang.Void> {
                public doInBackground(): java.util.Set<javax.management.ObjectName>
                protected done(): void
                public doInBackground(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class ProxyClient implements com.sun.tools.jconsole.JConsoleContext {
                public isSslRmiRegistry(): boolean
                public isSslRmiStub(): boolean
                public isVmConnector(): boolean
                public getConnectionState(): com.sun.tools.jconsole.JConsoleContext$ConnectionState
                public static getProxyClient(arg0: sun.tools.jconsole.LocalVirtualMachine): sun.tools.jconsole.ProxyClient
                public static getConnectionName(arg0: sun.tools.jconsole.LocalVirtualMachine): java.lang.String
                public static getProxyClient(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): sun.tools.jconsole.ProxyClient
                public static getConnectionName(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
                public static getProxyClient(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string): sun.tools.jconsole.ProxyClient
                public static getConnectionName(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): java.lang.String
                public connectionName(): java.lang.String
                public getDisplayName(): java.lang.String
                public toString(): java.lang.String
                public getMBeanServerConnection(): javax.management.MBeanServerConnection
                public getSnapshotMBeanServerConnection(): sun.tools.jconsole.ProxyClient$SnapshotMBeanServerConnection
                public getUrl(): java.lang.String
                public getHostName(): java.lang.String
                public getPort(): int
                public getVmid(): int
                public getUserName(): java.lang.String
                public getPassword(): java.lang.String
                public disconnect(): void
                public getDomains(): java.lang.String[]
                public getMBeans(arg0: java.lang.String | string): java.util.Map<javax.management.ObjectName, javax.management.MBeanInfo>
                public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                public getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean
                public getCompilationMXBean(): java.lang.management.CompilationMXBean
                public getMemoryPoolProxies(): java.util.Collection<sun.tools.jconsole.MemoryPoolProxy>
                public getGarbageCollectorMXBeans(): java.util.Collection<java.lang.management.GarbageCollectorMXBean>
                public getMemoryMXBean(): java.lang.management.MemoryMXBean
                public getRuntimeMXBean(): java.lang.management.RuntimeMXBean
                public getThreadMXBean(): java.lang.management.ThreadMXBean
                public getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean
                public getSunOperatingSystemMXBean(): com.sun.management.OperatingSystemMXBean
                public getHotSpotDiagnosticMXBean(): com.sun.management.HotSpotDiagnosticMXBean
                public getMXBean<T>(arg0: javax.management.ObjectName, arg1: java.lang.Class<T>): T
                public findDeadlockedThreads<T>(): long[]
                public markAsDead<T>(): void
                public isDead<T>(): boolean
                public isRegistered<T>(arg0: javax.management.ObjectName): boolean
                public addPropertyChangeListener<T>(arg0: java.beans.PropertyChangeListener): void
                public addWeakPropertyChangeListener<T>(arg0: java.beans.PropertyChangeListener): void
                public removePropertyChangeListener<T>(arg0: java.beans.PropertyChangeListener): void
                public static class: java.lang.Class<any>
            }
            class ProxyClient$1 {
                public static class: java.lang.Class<any>
            }
            class ProxyClient$SnapshotInvocationHandler implements java.lang.reflect.InvocationHandler {
                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class ProxyClient$SnapshotInvocationHandler$$Lambda implements java.lang.reflect.InvocationHandler {
                public (arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
            }
            class ProxyClient$SnapshotInvocationHandler$NameValueMap extends java.util.HashMap<java.lang.String, java.lang.Object> {
                public static class: java.lang.Class<any>
            }
            class ProxyClient$Snapshot {
                public static newSnapshot(arg0: javax.management.MBeanServerConnection): sun.tools.jconsole.ProxyClient$SnapshotMBeanServerConnection
                public static class: java.lang.Class<any>
            }
            interface ProxyClient$SnapshotMBeanServerConnection extends javax.management.MBeanServerConnection {
                flush(): void
            }
            class ProxyClient$WeakPCL extends java.lang.ref.WeakReference<java.beans.PropertyChangeListener> implements java.beans.PropertyChangeListener {
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public static class: java.lang.Class<any>
            }
            namespace inspector {
                class IconManager {
                    public static MBEAN: javax.swing.Icon
                    public static MBEANSERVERDELEGATE: javax.swing.Icon
                    public static DEFAULT_XOBJECT: javax.swing.Icon
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class TableSorter extends javax.swing.table.DefaultTableModel implements java.awt.event.MouseListener {
                    public constructor()
                    public constructor(arg0: java.lang.Object[], arg1: int)
                    public newDataAvailable(arg0: javax.swing.event.TableModelEvent): void
                    public addTableModelListener(arg0: javax.swing.event.TableModelListener): void
                    public removeTableModelListener(arg0: javax.swing.event.TableModelListener): void
                    public sortByColumn(arg0: int): void
                    public sortByColumn(arg0: int, arg1: boolean): void
                    public getIndexOfRow(arg0: int): int
                    public addMouseListenerToHeaderInTable(arg0: javax.swing.JTable): void
                    public mouseClicked(arg0: java.awt.event.MouseEvent): void
                    public mousePressed(arg0: java.awt.event.MouseEvent): void
                    public mouseEntered(arg0: java.awt.event.MouseEvent): void
                    public mouseExited(arg0: java.awt.event.MouseEvent): void
                    public mouseReleased(arg0: java.awt.event.MouseEvent): void
                    public static class: java.lang.Class<any>
                }
                class ThreadDialog implements java.lang.Runnable {
                    public constructor(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int)
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class ThreadDialog$$Lambda implements java.lang.Runnable {
                    public constructor(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int)
                }
                class XArrayDataViewer {
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static loadArray(arg0: java.lang.Object): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class Utils {
                    public static getClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public static isUniformCollection(arg0: java.util.Collection<any>, arg1: java.lang.Class<any>): boolean
                    public static canBeRenderedAsArray(arg0: java.lang.Object): boolean
                    public static isSupportedArray(arg0: java.lang.Object): boolean
                    public static getArrayClassName(arg0: java.lang.String | string): java.lang.String
                    public static getReadableClassName(arg0: java.lang.String | string): java.lang.String
                    public static isEditableType(arg0: java.lang.String | string): boolean
                    public static getDefaultValue(arg0: java.lang.String | string): java.lang.String
                    public static newStringConstructor(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                    public static createObjectFromString(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                    public static getParameters(arg0: sun.tools.jconsole.inspector.XTextField[], arg1: java.lang.String[]): java.lang.Object[]
                    public static getActualException(arg0: java.lang.Throwable): java.lang.Throwable
                    public static class: java.lang.Class<any>
                }
                class Utils$CopyKeyAdapter extends java.awt.event.KeyAdapter {
                    public constructor()
                    public keyPressed(arg0: java.awt.event.KeyEvent): void
                    public keyTyped(arg0: java.awt.event.KeyEvent): void
                    public static class: java.lang.Class<any>
                }
                class Utils$EditFocusAdapter extends java.awt.event.FocusAdapter {
                    public constructor(arg0: javax.swing.CellEditor)
                    public focusLost(arg0: java.awt.event.FocusEvent): void
                    public static class: java.lang.Class<any>
                }
                class Utils$ReadOnlyTableCellEditor extends javax.swing.DefaultCellEditor {
                    public constructor(arg0: javax.swing.JTextField)
                    public static class: java.lang.Class<any>
                }
                class XOpenTypeViewer extends javax.swing.JPanel implements java.awt.event.ActionListener {
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static loadOpenType(arg0: java.lang.Object): java.awt.Component
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public static class: java.lang.Class<any>
                }
                class XOpenTypeViewer$XArrayData extends sun.tools.jconsole.inspector.XOpenTypeViewer$XCompositeData implements sun.tools.jconsole.inspector.XOpenTypeViewer$XViewedArrayData {
                    public viewed(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer): void
                    public getElementCount(): int
                    public getSelectedElementIndex(): int
                    public renderKey(arg0: java.lang.String | string, arg1: java.awt.Component): void
                    public incrElement(): void
                    public decrElement(): void
                    public canDecrement(): boolean
                    public canIncrement(): boolean
                    public toString(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XOpenTypeViewer$XCompositeData extends sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData {
                    protected columnNames: java.lang.String[]
                    public constructor()
                    public constructor(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData)
                    public constructor(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData, arg1: javax.management.openmbean.CompositeData)
                    public viewed(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer): void
                    public toString(): java.lang.String
                    protected formatKey(arg0: java.lang.String | string): java.lang.Object
                    protected loadCompositeData(arg0: javax.management.openmbean.CompositeData): void
                    public static class: java.lang.Class<any>
                }
                class XOpenTypeViewer$XTabularData extends sun.tools.jconsole.inspector.XOpenTypeViewer$XCompositeData implements sun.tools.jconsole.inspector.XOpenTypeViewer$XViewedTabularData {
                    public constructor(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData, arg1: javax.management.openmbean.TabularData)
                    public renderKey(arg0: java.lang.String | string, arg1: java.awt.Component): void
                    public getElementCount(): int
                    public getSelectedElementIndex(): int
                    public incrElement(): void
                    public decrElement(): void
                    public canDecrement(): boolean
                    public canIncrement(): boolean
                    public toString(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XOpenTypeViewer$TabularDataComparator implements java.util.Comparator<javax.management.openmbean.CompositeData> {
                    public constructor(arg0: javax.management.openmbean.TabularType)
                    public compare(arg0: javax.management.openmbean.CompositeData, arg1: javax.management.openmbean.CompositeData): int
                    public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                abstract class XOpenTypeViewer$XOpenTypeData extends javax.swing.JTable {
                    protected col1Width: int
                    protected col2Width: int
                    protected constructor(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData)
                    public getViewedParent(): sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData
                    public getToolTip(arg0: int, arg1: int): java.lang.String
                    public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                    public renderKey(arg0: java.lang.String | string, arg1: java.awt.Component): void
                    public prepareRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$Lambda, arg1: int, arg2: int): java.awt.Component
                    protected isClickableElement(arg0: java.lang.Object): boolean
                    protected updateColumnWidth(): void
                    public viewed(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer): void
                    protected initTable(arg0: java.lang.String[]): void
                    protected emptyTable(): void
                    public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public static class: java.lang.Class<any>
                }
                interface XOpenTypeViewer$XViewedArrayData extends sun.tools.jconsole.inspector.XOpenTypeViewer$Navigatable {
                }
                interface XOpenTypeViewer$XViewedTabularData extends sun.tools.jconsole.inspector.XOpenTypeViewer$Navigatable {
                }
                interface XOpenTypeViewer$Navigatable {
                    incrElement(): void
                    decrElement(): void
                    canDecrement(): boolean
                    canIncrement(): boolean
                    getElementCount(): int
                    getSelectedElementIndex(): int
                }
                class XOpenTypeViewer$XOpenTypeDataListener extends java.awt.event.MouseAdapter {
                    public mousePressed(arg0: java.awt.event.MouseEvent): void
                    public static class: java.lang.Class<any>
                }
                class XPlotter extends sun.tools.jconsole.Plotter {
                    public constructor(arg0: javax.swing.JTable, arg1: sun.tools.jconsole.Plotter$Unit)
                    public addValues(arg0: long, ...arg1: long[]): void
                    public static class: java.lang.Class<any>
                }
                class XPlottingViewer extends sun.tools.jconsole.PlotterPanel implements java.awt.event.ActionListener {
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static loadPlotting(arg0: sun.tools.jconsole.inspector.XMBean, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: javax.swing.JTable, arg4: sun.tools.jconsole.MBeansTab): java.awt.Component
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public createPlotter(arg0: sun.tools.jconsole.inspector.XMBean, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.swing.JTable): sun.tools.jconsole.Plotter
                    public static class: java.lang.Class<any>
                }
                class XPlottingViewer$2 extends java.util.TimerTask {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class XPlottingViewer$2$1 implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class XPlottingViewer$2$1$$Lambda implements java.lang.Runnable {
                    public (): void
                }
                class XPlottingViewer$1 extends sun.tools.jconsole.inspector.XPlotter {
                    public getPreferredSize(): java.awt.Dimension
                    public getMinimumSize(): java.awt.Dimension
                    public static class: java.lang.Class<any>
                }
                class XTextFieldEditor extends sun.tools.jconsole.inspector.XTextField implements javax.swing.table.TableCellEditor {
                    protected evtListenerList: javax.swing.event.EventListenerList
                    protected changeEvent: javax.swing.event.ChangeEvent
                    public constructor()
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    protected dropSuccess(): void
                    public addCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
                    public removeCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
                    protected fireEditingStopped(): void
                    protected fireEditingCanceled(): void
                    public cancelCellEditing(): void
                    public stopCellEditing(): boolean
                    public isCellEditable(arg0: java.util.EventObject): boolean
                    public shouldSelectCell(arg0: java.util.EventObject): boolean
                    public getCellEditorValue(): java.lang.Object
                    public getTableCellEditorComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: int, arg4: int): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class XTextFieldEditor$1 extends java.awt.event.FocusAdapter {
                    public focusLost(arg0: java.awt.event.FocusEvent): void
                    public static class: java.lang.Class<any>
                }
                class XObject extends javax.swing.JLabel {
                    public static NULL_OBJECT: sun.tools.jconsole.inspector.XObject
                    public constructor(arg0: java.lang.Object, arg1: javax.swing.Icon)
                    public constructor(arg0: java.lang.Object)
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getObject(): java.lang.Object
                    public static useHashCodeRepresentation(arg0: boolean): void
                    public static hashCodeRepresentation(): boolean
                    public setObject(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class XTextField extends javax.swing.JPanel implements javax.swing.event.DocumentListener , java.awt.event.ActionListener {
                    protected textField: javax.swing.JTextField
                    protected static COMPATIBLE_VALUE: int
                    protected static CURRENT_VALUE: int
                    protected static NULL_VALUE: int
                    public constructor()
                    public constructor(arg0: java.lang.Object)
                    public constructor(arg0: java.lang.Object, arg1: int)
                    public constructor(arg0: java.lang.Object, arg1: java.lang.Class<any>, arg2: int, arg3: boolean, arg4: javax.swing.JButton | javax.swing.JButton$$Lambda, arg5: sun.tools.jconsole.inspector.XOperations)
                    public static setNullSelectionAllowed(arg0: boolean): void
                    public static getNullSelectionAllowed(): boolean
                    protected init(arg0: java.lang.Object, arg1: java.lang.Class<any>): void
                    public setHorizontalAlignment(arg0: int): void
                    protected buildJMenuItem(arg0: sun.tools.jconsole.inspector.XObject, arg1: int): javax.swing.JMenuItem
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public getValue(): java.lang.Object
                    public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
                    public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
                    public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
                    public static class: java.lang.Class<any>
                }
                class OperationEntry extends javax.swing.JPanel {
                    public constructor(arg0: javax.management.MBeanOperationInfo, arg1: boolean, arg2: javax.swing.JButton | javax.swing.JButton$$Lambda, arg3: sun.tools.jconsole.inspector.XOperations)
                    public getSignature(): java.lang.String[]
                    public getParameters(): java.lang.Object[]
                    public getReturnType(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XMBeanInfo extends javax.swing.JPanel {
                    public constructor()
                    public emptyInfoTable(): void
                    public emptyDescTable(): void
                    public addMBeanInfo(arg0: sun.tools.jconsole.inspector.XMBean, arg1: javax.management.MBeanInfo | javax.management.MBeanInfo$$Lambda): void
                    public addMBeanAttributeInfo(arg0: javax.management.MBeanAttributeInfo): void
                    public addMBeanOperationInfo(arg0: javax.management.MBeanOperationInfo): void
                    public addMBeanNotificationInfo(arg0: javax.management.MBeanNotificationInfo): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanInfo$1 {
                    public static class: java.lang.Class<any>
                }
                class XMBeanInfo$MBeanInfoTableCellEditor extends sun.tools.jconsole.inspector.Utils$ReadOnlyTableCellEditor {
                    public constructor(arg0: javax.swing.JTextField)
                    public getTableCellEditorComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: int, arg4: int): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class XMBeanInfo$MBeanInfoTableCellRenderer extends javax.swing.table.DefaultTableCellRenderer {
                    public getTableCellRendererComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: int, arg5: int): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class XMBeanInfo$TableRowDivider {
                    public constructor(arg0: java.lang.String | string)
                    public toString(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XMBeanInfo$ReadOnlyDefaultTableModel extends javax.swing.table.DefaultTableModel {
                    public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanNotifications extends javax.swing.JTable implements javax.management.NotificationListener {
                    public static NOTIFICATION_RECEIVED_EVENT: java.lang.String
                    public constructor()
                    public cancelCellEditing(): void
                    public stopCellEditing(): void
                    public isCellEditable(arg0: int, arg1: int): boolean
                    public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public prepareRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$Lambda, arg1: int, arg2: int): java.awt.Component
                    public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                    public getReceivedNotifications(arg0: sun.tools.jconsole.inspector.XMBean): long
                    public clearCurrentNotifications(): boolean
                    public unregisterListener(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public registerListener(arg0: javax.swing.tree.DefaultMutableTreeNode): void
                    public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                    public disableNotifications(): void
                    public addNotificationsListener(arg0: javax.management.NotificationListener): void
                    public removeNotificationsListener(arg0: javax.management.NotificationListener): void
                    public isListenerRegistered(arg0: sun.tools.jconsole.inspector.XMBean): boolean
                    public loadNotifications(arg0: sun.tools.jconsole.inspector.XMBean): void
                    public isTableEditable(): boolean
                    public emptyTable(): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanNotifications$XMBeanNotificationsListener implements javax.management.NotificationListener {
                    public constructor(arg0: sun.tools.jconsole.inspector.XMBeanNotifications, arg1: sun.tools.jconsole.inspector.XMBeanNotifications, arg2: sun.tools.jconsole.inspector.XMBean, arg3: javax.swing.tree.DefaultMutableTreeNode, arg4: java.lang.String[])
                    public getData(): java.util.List<java.lang.Object[]>
                    public clear(): void
                    public isRegistered(): boolean
                    public unregister(): void
                    public getReceivedNotifications(): long
                    public register(arg0: javax.swing.tree.DefaultMutableTreeNode): void
                    public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanNotifications$XMBeanNotificationsListener$1 implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanNotifications$XMBeanNotificationsListener$1$$Lambda implements java.lang.Runnable {
                    public (): void
                }
                class XMBeanNotifications$UserDataCellEditor extends sun.tools.jconsole.inspector.XTextFieldEditor {
                    public getTableCellEditorComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: int, arg4: int): java.awt.Component
                    public stopCellEditing(): boolean
                    public static class: java.lang.Class<any>
                }
                class XMBeanNotifications$NotifMouseListener extends java.awt.event.MouseAdapter {
                    public mousePressed(arg0: java.awt.event.MouseEvent): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanNotifications$UserDataCell {
                    public toString(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XMBeanNotifications$UserDataCellRenderer extends javax.swing.table.DefaultTableCellRenderer {
                    public getTableCellRendererComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: int, arg5: int): java.awt.Component
                    public getComponent(): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                abstract class XOperations extends javax.swing.JPanel implements java.awt.event.ActionListener {
                    public static OPERATION_INVOCATION_EVENT: java.lang.String
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public removeOperations(): void
                    public loadOperations(arg0: sun.tools.jconsole.inspector.XMBean, arg1: javax.management.MBeanInfo | javax.management.MBeanInfo$$Lambda): void
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public addOperationsListener(arg0: javax.management.NotificationListener): void
                    public removeOperationsListener(arg0: javax.management.NotificationListener): void
                    protected updateOperations(arg0: javax.management.MBeanOperationInfo[]): javax.management.MBeanOperationInfo[]
                    public static class: java.lang.Class<any>
                }
                class XOperations$1 extends javax.swing.SwingWorker<java.lang.Object, java.lang.Void> {
                    public doInBackground(): java.lang.Object
                    protected done(): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanOperations extends sun.tools.jconsole.inspector.XOperations {
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    protected updateOperations(arg0: javax.management.MBeanOperationInfo[]): javax.management.MBeanOperationInfo[]
                    public static class: java.lang.Class<any>
                }
                abstract class XTable extends javax.swing.JTable {
                    public constructor()
                    public getSelectedIndex(): int
                    public convertRowToIndex(arg0: int): int
                    public emptyTable(): void
                    public isTableEditable(): boolean
                    public isColumnEditable(arg0: int): boolean
                    public isReadable(arg0: int): boolean
                    public isWritable(arg0: int): boolean
                    public isCellError(arg0: int, arg1: int): boolean
                    public isAttributeViewable(arg0: int, arg1: int): boolean
                    public setTableValue(arg0: java.lang.Object, arg1: int): void
                    public getValue(arg0: int): java.lang.Object
                    public getClassName(arg0: int): java.lang.String
                    public getValueName(arg0: int): java.lang.String
                    public isReadWrite(arg0: int): boolean
                    public isCellEditable(arg0: int, arg1: int): boolean
                    public isCellDroppable(arg0: int, arg1: int): boolean
                    public getToolTip(arg0: int, arg1: int): java.lang.String
                    public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                    public prepareRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$Lambda, arg1: int, arg2: int): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes extends sun.tools.jconsole.inspector.XTable {
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public prepareRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$Lambda, arg1: int, arg2: int): java.awt.Component
                    public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                    public cancelCellEditing(): void
                    public stopCellEditing(): void
                    public editCellAt(arg0: int, arg1: int, arg2: java.util.EventObject): boolean
                    public isCellEditable(arg0: int, arg1: int): boolean
                    public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public isTableEditable(): boolean
                    public setTableValue(arg0: java.lang.Object, arg1: int): void
                    public isColumnEditable(arg0: int): boolean
                    public getClassName(arg0: int): java.lang.String
                    public getValueName(arg0: int): java.lang.String
                    public getValue(arg0: int): java.lang.Object
                    public getToolTip(arg0: int, arg1: int): java.lang.String
                    public isWritable(arg0: int): boolean
                    public getRowCount(): int
                    public isReadable(arg0: int): boolean
                    public isCellError(arg0: int, arg1: int): boolean
                    public isAttributeViewable(arg0: int, arg1: int): boolean
                    public loadAttributes(arg0: sun.tools.jconsole.inspector.XMBean, arg1: javax.management.MBeanInfo | javax.management.MBeanInfo$$Lambda): void
                    public refreshAttributes(): void
                    public columnMarginChanged(arg0: javax.swing.event.ChangeEvent): void
                    public emptyTable(): void
                    protected addTableData(arg0: javax.swing.table.DefaultTableModel, arg1: sun.tools.jconsole.inspector.XMBean, arg2: javax.management.MBeanAttributeInfo[], arg3: java.util.HashMap<java.lang.String, java.lang.Object>, arg4: java.util.HashMap<java.lang.String, java.lang.Object>, arg5: java.util.HashMap<java.lang.String, java.lang.Object>): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$AttributesListener implements javax.swing.event.TableModelListener {
                    public constructor(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: java.awt.Component)
                    public tableChanged(arg0: javax.swing.event.TableModelEvent): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$AttributesListener$1 extends javax.swing.SwingWorker<java.lang.Void, java.lang.Void> {
                    protected doInBackground(): java.lang.Void
                    protected done(): void
                    protected doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$ZoomedCell {
                    public toString(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$MaximizedCellRenderer extends javax.swing.table.DefaultTableCellRenderer {
                    public getTableCellRendererComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: int, arg5: int): java.awt.Component
                    public getComponent(): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$ValueCellEditor extends sun.tools.jconsole.inspector.XTextFieldEditor {
                    public getTableCellEditorComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: int, arg4: int): java.awt.Component
                    public stopCellEditing(): boolean
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$AttributesMouseListener extends java.awt.event.MouseAdapter {
                    public mousePressed(arg0: java.awt.event.MouseEvent): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$3 extends javax.swing.SwingWorker<java.lang.Void, java.lang.Void> {
                    protected doInBackground(): java.lang.Void
                    protected done(): void
                    protected doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$2 implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class XMBeanAttributes$2$$Lambda implements java.lang.Runnable {
                    public (): void
                }
                class XMBeanAttributes$1 extends javax.swing.SwingWorker<java.lang.Runnable, java.lang.Void> {
                    protected doInBackground(): java.lang.Runnable
                    protected done(): void
                    protected doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XDataViewer {
                    public static OPEN: int
                    public static ARRAY: int
                    public static NUMERIC: int
                    public static NOT_SUPPORTED: int
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public static registerForMouseEvent(arg0: java.awt.Component, arg1: java.awt.event.MouseListener): void
                    public static dispose(arg0: sun.tools.jconsole.MBeansTab): void
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static getViewerType(arg0: java.lang.Object): int
                    public static getActionLabel(arg0: int): java.lang.String
                    public createOperationViewer(arg0: java.lang.Object, arg1: sun.tools.jconsole.inspector.XMBean): java.awt.Component
                    public static createNotificationViewer(arg0: java.lang.Object): java.awt.Component
                    public createAttributeViewer(arg0: java.lang.Object, arg1: sun.tools.jconsole.inspector.XMBean, arg2: java.lang.String | string, arg3: javax.swing.JTable): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class XSheet extends javax.swing.JPanel implements java.awt.event.ActionListener , javax.management.NotificationListener {
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public dispose(): void
                    public isMBeanNode(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public displayNode(arg0: javax.swing.tree.DefaultMutableTreeNode): void
                    public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public static class: java.lang.Class<any>
                }
                class XSheet$7 {
                    public static class: java.lang.Class<any>
                }
                class XSheet$6 extends javax.swing.SwingWorker<java.lang.Boolean, java.lang.Void> {
                    public doInBackground(): java.lang.Boolean
                    protected done(): void
                    public doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XSheet$5 extends javax.swing.SwingWorker<java.lang.Void, java.lang.Void> {
                    public doInBackground(): java.lang.Void
                    protected done(): void
                    public doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XSheet$4 extends javax.swing.SwingWorker<javax.management.MBeanInfo, java.lang.Void> {
                    public doInBackground(): javax.management.MBeanInfo
                    protected done(): void
                    public doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XSheet$3 extends javax.swing.SwingWorker<javax.management.MBeanInfo, java.lang.Void> {
                    public doInBackground(): javax.management.MBeanInfo
                    protected done(): void
                    public doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XSheet$2 extends javax.swing.SwingWorker<javax.management.MBeanAttributeInfo, java.lang.Void> {
                    public doInBackground(): javax.management.MBeanAttributeInfo
                    protected done(): void
                    public doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XSheet$1 extends javax.swing.SwingWorker<javax.management.MBeanInfo, java.lang.Void> {
                    public doInBackground(): javax.management.MBeanInfo
                    protected done(): void
                    public doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XMBean {
                    public constructor(arg0: javax.management.ObjectName, arg1: sun.tools.jconsole.MBeansTab)
                    public isBroadcaster(): java.lang.Boolean
                    public invoke(arg0: java.lang.String | string): java.lang.Object
                    public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                    public setAttribute(arg0: javax.management.Attribute): void
                    public getAttribute(arg0: java.lang.String | string): java.lang.Object
                    public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
                    public getAttributes(arg0: javax.management.MBeanAttributeInfo[]): javax.management.AttributeList
                    public getObjectName(): javax.management.ObjectName
                    public getMBeanInfo(): javax.management.MBeanInfo
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getText(): java.lang.String
                    public setText(arg0: java.lang.String | string): void
                    public getIcon(): javax.swing.Icon
                    public setIcon(arg0: javax.swing.Icon): void
                    public toString(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XTree extends javax.swing.JTree {
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public constructor(arg0: javax.swing.tree.TreeNode, arg1: sun.tools.jconsole.MBeansTab)
                    public removeAll(): void
                    public removeMBeanFromView(arg0: javax.management.ObjectName): void
                    public hasMetadataNodes(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public isMetadataNode(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public addMBeansToView(arg0: java.util.Set<javax.management.ObjectName>): void
                    public addMBeanToView(arg0: javax.management.ObjectName): void
                    public addMetadataNodes(arg0: javax.swing.tree.DefaultMutableTreeNode): void
                    public static class: java.lang.Class<any>
                }
                class XTree$1 {
                    public static class: java.lang.Class<any>
                }
                class XTree$Token {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public getTokenType(): java.lang.String
                    public getTokenValue(): java.lang.String
                    public getKey(): java.lang.String
                    public getValue(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XTree$Dn implements java.lang.Comparable<sun.tools.jconsole.inspector.XTree$Dn> {
                    public constructor(arg0: javax.management.ObjectName)
                    public getObjectName(): javax.management.ObjectName
                    public getDomain(): java.lang.String
                    public getKeyPropertyList(): java.lang.String
                    public getToken(arg0: int): sun.tools.jconsole.inspector.XTree$Token
                    public getTokenCount(): int
                    public getHashDn(): java.lang.String
                    public getHashKey(arg0: sun.tools.jconsole.inspector.XTree$Token): java.lang.String
                    public toString(): java.lang.String
                    public compareTo(arg0: sun.tools.jconsole.inspector.XTree$Dn): int
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class XTree$ComparableDefaultMutableTreeNode extends javax.swing.tree.DefaultMutableTreeNode implements java.lang.Comparable<javax.swing.tree.DefaultMutableTreeNode> {
                    public compareTo(arg0: javax.swing.tree.DefaultMutableTreeNode): int
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
                class XTree$MBeanInfoNodesSwingWorker extends javax.swing.SwingWorker<java.lang.Object[], java.lang.Void> {
                    public constructor(arg0: javax.swing.tree.DefaultTreeModel, arg1: javax.swing.tree.DefaultMutableTreeNode, arg2: sun.tools.jconsole.inspector.XMBean)
                    public doInBackground(): java.lang.Object[]
                    protected done(): void
                    public doInBackground(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class XNodeInfo {
                    public constructor(arg0: sun.tools.jconsole.inspector.XNodeInfo$Type, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: java.lang.String | string)
                    public getType(): sun.tools.jconsole.inspector.XNodeInfo$Type
                    public getData(): java.lang.Object
                    public getLabel(): java.lang.String
                    public getToolTipText(): java.lang.String
                    public toString(): java.lang.String
                    public static class: java.lang.Class<any>
                }
                class XNodeInfo$Type extends java.lang.Enum<sun.tools.jconsole.inspector.XNodeInfo$Type> {
                    public static MBEAN: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static NONMBEAN: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static ATTRIBUTES: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static OPERATIONS: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static NOTIFICATIONS: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static ATTRIBUTE: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static OPERATION: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static NOTIFICATION: sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static values(): sun.tools.jconsole.inspector.XNodeInfo$Type[]
                    public static valueOf(arg0: java.lang.String | string): sun.tools.jconsole.inspector.XNodeInfo$Type
                    public static class: java.lang.Class<any>
                }
                class XTreeRenderer extends javax.swing.tree.DefaultTreeCellRenderer {
                    public constructor()
                    public getTreeCellRendererComponent(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: int, arg6: boolean): java.awt.Component
                    public static class: java.lang.Class<any>
                }
                class XTreeRenderer$1 {
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
