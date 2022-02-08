<?php
/**
 * Order information template part.
 *
 * @package LifterLMS/Templates
 *
 * @since [version]
 * @version [version]
 *
 * @param LLMS_Order $order Current order object.
 */

defined( 'ABSPATH' ) || exit;
?>

<aside class="order-secondary">

	<?php
		/**
		 * Action executed after opening the secondary order element.
		 *
		 * @since [version]
		 *
		 * @param LLMS_Order $order The current order object.
		 */
		do_action( 'llms_view_order_before_secondary', $order );
	?>

	<?php if ( $order->is_recurring() ) : ?>

		<?php if ( isset( $_GET['confirm-switch'] ) || 'llms-active' === $order->get( 'status' ) || $order->can_resubscribe() ) : ?>

			<?php
			llms_get_template(
				'checkout/form-switch-source.php',
				array(
					'confirm' => llms_filter_input_sanitize_string( INPUT_GET, 'confirm-switch' ),
					'order'   => $order,
				)
			);
			?>

		<?php endif; ?>

		<?php if ( apply_filters( 'llms_allow_subscription_cancellation', true, $order ) && in_array( $order->get( 'status' ), array( 'llms-active', 'llms-on-hold' ) ) ) : ?>

			<form action="" id="llms-cancel-subscription-form" method="POST">

				<?php
				llms_form_field(
					array(
						'columns'     => 12,
						'classes'     => 'llms-button-secondary',
						'id'          => 'llms_cancel_subscription',
						'value'       => __( 'Cancel Subscription', 'lifterlms' ),
						'last_column' => true,
						'required'    => false,
						'type'        => 'submit',
					)
				);
				?>

				<?php wp_nonce_field( 'llms_cancel_subscription', '_cancel_sub_nonce' ); ?>
				<input name="order_id" type="hidden" value="<?php echo $order->get( 'id' ); ?>">

			</form>

		<?php endif; ?>

	<?php endif; ?>

	<?php
		/**
		 * Action executed before closing the secondary order element.
		 *
		 * @since [version]
		 *
		 * @param LLMS_Order $order The current order object.
		 */
		do_action( 'llms_view_order_after_secondary', $order );
	?>

</aside>
